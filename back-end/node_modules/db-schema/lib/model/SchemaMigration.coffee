clone = require('clone')

class SchemaMigration
  constructor:(source)->
    @_validate(source)
    @_processSource(source)

  _validate:(source)->
    for entityName,entity of source
      if typeof entity is 'object' and not entity.columns and not entity.relations and not entity.relationships
        throw new Error('not a valid migration source')

  _processSource:(originSource)->
    source = clone(originSource)
    entitiesByName = {}
    @entities = []
    for entityName,entity of source
      _entity = {name:entityName}

      if typeof entity is 'string'
        _entity.rename = entity
      else if typeof entity is 'number'
        _entity.type = if entity then 'add' else 'remove'
      else if typeof entity is 'object'
        _entity.columns = []
        for columnName,column of entity.columns
          if typeof column is 'string'
            column = {type: 'change',target:column}
          else
            column = {type:(if column then 'add' else 'remove')}
          column.name = columnName
          _entity.columns.push(column)

        _entity.relations = []
        relations = entity.relations or entity.relationships
        relationsByName = {}
        for relationName,relation of relations
          if typeof relation is 'string'
            relation = {type: 'change',target:relation}
          else
            relation = {type:(if relation then 'add' else 'remove')}
          relation.name = relationName
          _entity.relations.push(relation)
          relationsByName[relationName] = relation

        _entity.indexes = []
        for indexName,index of entity.indexes
          if typeof index is 'string'
            index = {type: 'change',target:index}
          else
            index = {type:(if index then 'add' else 'remove')}
          index.name = indexName
          _entity.indexes.push(index)

      @entities.push(_entity)
      entitiesByName[entityName] = _entity


    for entity in @entities
      if typeof entity is 'object' and entity.relations
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

            if relation.toMany and not relation.primary and relation.inverse.toMany and not relation.inverse.primary
              relation.primary = yes


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



module.exports = SchemaMigration