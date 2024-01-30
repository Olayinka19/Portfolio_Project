var assert = require('assert')
var DBSchema = require('../index.js')
var fs = require('fs')

var dbs = new DBSchema()

describe('generating schema from yaml',function(){
    it('should parse valid yaml',function(){
        var schema = dbs.generateSchemaFromYaml('mysql',fs.readFileSync(__dirname+'/company.yaml'))
        assert.equal(schema,fs.readFileSync(__dirname+'/company.sql').toString());
    })
    //it('should successfuly create schema on db',function(done){
    //    dbs.buildSchemaFromYaml('mysql',fs.readFileSync(__dirname+'/company.yaml'),'mysql://localhost/test',function(err){
    //        if(err)return done(err);
    //        dbs.flush('mysql','mysql://localhost/test',done)
    //    })
    //})
})