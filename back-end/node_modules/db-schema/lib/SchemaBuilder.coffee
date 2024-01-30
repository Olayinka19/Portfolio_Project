yaml = require('js-yaml')
SchemaDefinition = require('./model/SchemaDefinition')
SchemaMigration = require('./model/SchemaMigration')


class SchemaBuilder extends Object
  constructor:(@options = {})->
    super
    @generators = {}

  getCurrentSchemaVersion:(engine,url,callback)->
    return @_schemaGenerator(engine).getCurrentVersion(url,callback)


  generateSchemaFromYaml:(engine,yamlSource)->
    return @generateSchema(engine,yaml.safeLoad(yamlSource))

  generateSchema:(engine,definition)->
    return @_schemaGenerator(engine).generateSchema(new SchemaDefinition(definition))


  generateSchemaMigrationFromYamls:(engine,yamlSources,versionFrom,versionTo)->
    sources = {}
    for key,value of yamlSources
      sources[key] = yaml.safeLoad(value)
    return @generateSchemaMigration(engine,sources,versionFrom,versionTo)

  generateSchemaMigration:(engine,definitions,versionFrom,versionTo)->
    defs = {}
    for key,definition of definitions
      if key.indexOf('->') isnt -1
        defs[key] = new SchemaMigration(definition)
      else
        defs[key] = new SchemaDefinition(definition)
    return @_schemaGenerator(engine).generateSchemaMigration(defs,versionFrom,versionTo)

  latestVersion:(definitions)->
    latestVersion = Object.keys(definitions).filter((item)->
      return item.indexOf('->') is -1
    ).sort().reverse()[0]
    return latestVersion

  _schemaGenerator:(engine)->
    generator = @generators[engine]
    if not generator
      try
        generator = new (require('./generators/'+engine.toLowerCase()))()
      catch e
        throw new Error('engine '+engine+' not supported, error: ' + e.message)
      @generators[engine] = generator
    return generator



module.exports = SchemaBuilder