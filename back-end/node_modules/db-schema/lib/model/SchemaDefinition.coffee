clone = require('clone')

class SchemaDefinition
  constructor:(source)->
    @_validate(source)
    @_processSource(source)

  _validate:(source)->
    for entityName,entity of source
      if not entity.columns and (not entity.relations or not entity.relationships)
        throw new Error('not a valid definition source')

  _processSource:(sourceOrigin)->
    source = clone(sourceOrigin)
    entitiesByName = {}
    @entities = []
    for entityName,entity of source
      _entity = {name:entityName}

      _entity.columns = []
      for columnName,column of entity.columns
        if typeof column is 'string'
          column = {type: column}
        column.name = columnName
        _entity.columns.push(column)

      _entity.relations = []
      relations = entity.relations or entity.relationships
      relationsByName = {}
      for relationName,relation of relations
        relation.name = relationName
        _entity.relations.push(relation)
        relationsByName[relationName] = relation

      _entity.indexes = []
      for indexName,index of entity.indexes
        if typeof index is 'string'
          index = {columns:index}
        index.name = indexName
        _entity.indexes.push(index)

      @entities.push(_entity)
      entitiesByName[entityName] = _entity


    for entity in @entities
      for relation in entity.relations
        if relation.inverse
          relation.entity = entitiesByName[relation.entity]
          relation.inverseName = relation.inverse
          relation.inverse = null
          for _relation in relation.entity.relations
            if _relation.name is relation.inverseName
              relation.inverse = _relation

          if not relation.inverse and not relation.type
            throw new Error('inverse relation not found ' + entity.name + '=>' + relation.name + '(' + relation.inverseName + ')')

          if relation.toMany and relation.inverse.toMany
            relation.primary = relation.entity.name < relation.inverse.entity.name
            relation.inverse.primary = not relation.primary



        switch relation.type
          when 'manyToOne'
            relation.toMany = no
          when 'oneToMany'
            relation.toMany = yes
            if not relation.inverse
              relation.inverse = {name:relation.inverseName,toMany:false,entity:entity}
              relation.entity.relations.push(relation.inverse)
          when 'manyToMany'
            relation.toMany = yes
            relation.primary = yes
            if not relation.inverse
              relation.inverse = {name:relation.inverseName,toMany:true,entity:entity}
              relation.entity.relations.push(relation.inverse)

      for index in entity.indexes
        if typeof index.columns is 'string'
          index.columns = index.columns.split(',')

        index.columns = index.columns or []
        if index.column
          index.columns.push(index.column)

  getEntity:(name)->
    for entity in @entities
      if entity.name is name
        return entity

  getColumn:(entityName,columnName)->
    for column in @getEntity(entityName).columns
      if column.name is columnName
        return column

  getRelation:(entityName,relationName)->
    for relation in @getEntity(entityName).relations
      if relation.name is relationName
        return relation


module.exports = SchemaDefinition