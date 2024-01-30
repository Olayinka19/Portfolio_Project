SchemaGenerator = require('../SchemaGenerator')

async = require('async')
unitConverter = require('unit-converter')

_ = require('underscore');
_.mixin(require('underscore.inflections'));


class MySQLSchemaGenerator extends SchemaGenerator

  constructor:(@options = {})->
    @options.identifierType = @options.identifierType or 'int'


  generateSchema:(definition)->
    sqls = []

    for entity in definition.entities
      sqls.push(@_tableDefinition(entity));

      for relation in entity.relations
        if relation.toMany and relation.inverse?.toMany and relation.primary
          sqls.push(@_manyToManyRelationDefinition(relation,entity))


    return if sqls.length is 0 then null else sqls.join(";\n")+';'

  _tableDefinition:(entity)->
    tableParts = [@_identifierColumn('id')+' AUTO_INCREMENT','PRIMARY KEY (`id`)']
    for column in entity.columns
      tableParts.push(@_columnDefinitionForAttribute(column))


    for relation in entity.relations
      if not relation.toMany
        tableParts.push(@_identifierColumn(relation.name+'_id',false))
        tableParts.push('KEY `'+relation.name+'_id` (`'+relation.name+'_id`)')


    if entity.indexes
      for index in entity.indexes
        str = ''
        if index.unique
          str = 'UNIQUE '
        str += 'KEY `'+index.name+'` '
        str += '(`' + index.columns.join('`,`') + '`)'
        tableParts.push(str)

    sql = "CREATE TABLE IF NOT EXISTS `"+@_tableNameForEntity(entity)+"` ("
    sql += tableParts.join(",")
    sql += ") ENGINE=InnoDB DEFAULT CHARSET=utf8"
    return sql

  _relationTableName:(relation,entity)->
    entityTableName = @_tableNameForEntity(entity)
    return entityTableName + '_' + relation.name

  _manyToManyRelationDefinition:(relation,entity)->
    entityTableName = @_tableNameForEntity(entity)
    relationTableName = _.singularize(relation.name)
    sql = 'CREATE TABLE IF NOT EXISTS `' + @_relationTableName(relation,entity)+ '` (' + @_identifierColumn(entityTableName+'_id') + ','+@_identifierColumn(relationTableName+'_id')+', PRIMARY KEY (`'+entityTableName+'_id`,`'+ relationTableName+'_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8'
    return sql

  generateSchemaMigration:(definitions,versionFrom,versionTo)->
    sqls = []

    version = versionFrom

    maxVersion = version

    loop
      version = @_generateSchemaMigration(definitions,version,sqls)
      if version
        maxVersion = version
      break if not version or version+'' is versionTo+''

    return if sqls.length is 0 then null else sqls.join(";\n")+';'

  _generateSchemaMigration:(definitions,version,sqls)->
    migration = null
    schema = null
    migrationKey = null
    newVersion = null
    for key,s of definitions
      if key.indexOf(version + '->') is 0
        migrationKey = key
        migration = s
        newVersion = key.split('->')[1]
        schema = definitions[newVersion]
        oldSchema = definitions[version]
        break
    if not migration
      throw new Error('migration not found for version '+version)
    if not schema
      throw new Error('destination schema not found for migration '+migrationKey)

    for entity in migration.entities
#      console.log(entity.name,entity)
      if entity.type is 'add'
        sqls.push(@_tableDefinition(schema.getEntity(entity.name)))
      else if entity.type is 'remove'
        sqls.push('DROP TABLE IF EXISTS `'+@_tableNameForEntity(entity)+'`')
      else
        alterPrefix = 'ALTER TABLE `' + @_tableNameForEntity(entity) + '`'
        for column in entity.columns
          if column.type is 'remove'
            sqls.push(alterPrefix + ' DROP COLUMN `'+column.name+'`')
          else if column.type is 'add'
            sqls.push(alterPrefix + ' ADD COLUMN ' + @_columnDefinitionForAttribute(schema.getColumn(entity.name,column.name)))
          else if column.type is 'change'
            sqls.push(alterPrefix + ' CHANGE `'+column.name+'` ' + @_columnDefinitionForAttribute(schema.getColumn(entity.name,column.target)))
        for relation in entity.relations
          switch relation.type
            when 'add'
              rel = schema.getRelation(entity.name,relation.name)
              if not rel
                throw new Error('relation ' + entity.name + '=>' + relation.name + ' not found')
              if not rel.toMany
                columnName = relation.name + '_id'
                sqls.push(alterPrefix + ' ADD COLUMN ' + @_identifierColumn(columnName,false))
                sqls.push(alterPrefix + ' ADD INDEX (`' + columnName + '`)')
              else if rel.toMany and rel.inverse?.toMany
                if relation.type is 'add'
                  sqls.push(@_manyToManyRelationDefinition(rel,entity))
              break
            when 'remove'
              rel = oldSchema.getRelation(entity.name,relation.name)
              if not rel
                throw new Error('relation ' + entity.name + '=>' + relation.name + ' not found')
              if not rel.toMany
                columnName = relation.name + '_id'
                sqls.push(alterPrefix + ' DROP COLUMN ' + @_identifierColumn(columnName,false))
              else if rel.toMany and rel.inverse?.toMany
                sqls.push('DROP TABLE IF EXISTS `' + @_relationTableName(rel,entity) + '`')
              break


    return newVersion

  _identifierColumn:(name,notNull = true)->
    sql = '`'+name+'` '+@_sqlTypeForColumnType(@options.identifierType)
    if notNull
      sql += ' NOT NULL'
    else
      sql += ' NULL DEFAULT NULL'
    return sql

  _columnDefinitionForAttribute:(column)->
    type = @_sqlTypeForColumnType(column.type,column)


    defaultValue = 'DEFAULT NULL'
    if column.default
      defaultValue = "DEFAULT '" + column.default + "'"

    definition = '`'+column.name+'` '+type
    if column.notNull
      definition += ' NOT NULL'
    else
      definition += ' NULL'
    definition += ' ' + defaultValue

    if column.unique
      definition += ', UNIQUE(`'+column.name+'`)'
    return definition

  _sqlTypeForColumnType:(columnType,options = {})->
    type = null
    if options.length
      length = unitConverter(options.length + 'B').to('B')
    switch columnType
      when 'bool','boolean'
        return 'tinyint(1)'
      when 'string','email','url'
        return 'varchar(' + (length or 255) + ')'
      when 'text'
        if length
          if length < 256
            return 'tinytext'
          else if length < 65536
            return 'text'
          else if length < 16777216
            return 'mediumtext'
          else if length < 4294967296
            return 'longtext'
        else
          return 'longtext'
      when 'data'
        if length
          if length < 256
            return 'tinyblob'
          else if length < 65536
            return 'blob'
          else if length < 16777216
            return 'mediumblob'
          else if length < 4294967296
            return 'longblob'
        else
          return 'longblob'
      when 'int','integer'
        return 'int('+(length or 11)+')'
      when 'decimal'
        return 'decimal('+(options.digits or 20)+','+(options.decimals or 5)+')'
      when 'float'
        return 'float'
      when 'double'
        return 'double'
      when 'date'
        return 'datetime'
      when 'timestamp'
        return 'timestamp'
      else
        throw new Error('unknown column type ' + columnType)

module.exports = MySQLSchemaGenerator