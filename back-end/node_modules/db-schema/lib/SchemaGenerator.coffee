class SchemaGenerator
  generateSchema:(definition)->
    throw new Error('override method generateSchema in custom generator')

  generateSchemaMigration:(definitions,versionFrom,versionTo)->
    throw new Error('override method generateSchemaMigration in custom generator')

  _tableNameForEntity:(entity)->
    return entity.name.toLowerCase()


module.exports = SchemaGenerator