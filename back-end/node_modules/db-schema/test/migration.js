var assert = require('assert')
var DBSchema = require('../index.js')
var fs = require('fs')

var dbs = new DBSchema()

describe('migrating schema from yaml',function(){
    var files = fs.readdirSync(__dirname+'/migration').filter(function(item){
        return item.indexOf('.yaml') != -1;
    });
    var schemas = {};
    var migrateFrom = 0;
    var maxVersion = 6;

    files.forEach(function(file){
        schemas[file.replace('.yaml','')] = fs.readFileSync(__dirname+'/migration/'+file,'utf8')
    });

    it('should generate migration',function(){
        var migration = dbs.generateSchemaMigrationFromYamls('mysql',schemas,0,3)
        assert.equal(migration,fs.readFileSync(__dirname+'/migration/migration_3.sql').toString());
    });

    it('should generate partial migration i->i+1',function(){
        for(var i=migrateFrom;i<maxVersion;i++){
            var migration = dbs.generateSchemaMigrationFromYamls('mysql',schemas,i,i+1)
            assert.equal(migration,fs.readFileSync(__dirname+'/migration/migration_'+i+'-'+(i+1)+'.sql').toString());
        }
    });

    it('should throw error when trying to run nonexisting migration '+maxVersion+'->'+(maxVersion+1),function(){
        assert.throws(function(){
            dbs.generateSchemaMigrationFromYamls('mysql',schemas,maxVersion,maxVersion+1);
        });
    });
})