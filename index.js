'use strict';
const path = require('path');
const gutil = require('gulp-util');
const through = require('through2-concurrent');
const Datauri = require('datauri');
const datauri = new Datauri();
var File = gutil.File;

module.exports = function(targetFilename) {

  var jsonResult = {};

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('MY_PLUGIN', 'Streaming not supported'));
      return;
    }

    gutil.log(`processing ${file.relative}`);
    datauri.format(path.extname(file.relative), file.contents);
    jsonResult[file.relative] = datauri.content;

    cb();

  }, function(cb) {
    gutil.log('image-converion done');
    var file = new File();
    file.path = targetFilename;
    file.contents = new Buffer(JSON.stringify(jsonResult, null, 2));
    this.push(file);
    cb();
  });
};
