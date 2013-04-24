
/**
 * Module dependencies.
 */

var fs = require('fs');

/**
 * Expose `hasAlpha`.
 */

module.exports = hasAlpha;

/**
 * Check if `png` has transparency.
 *
 * @param {String|Buffer} png buffer or filename
 * @param {Function} [fn]
 * @api public
 */

function hasAlpha(png, fn) {
  if ('string' == typeof png) return fromFile(png, fn);
  return 6 == png[25];
}

/**
 * From file.
 */

function fromFile(file, fn) {
  var buf = new Buffer(1);
  fs.open(file, 'r', function(err, fd){
    if (err) return fn(err);
    fs.read(fd, buf, 0, 1, 25, function(err, read, buf){
      if (err) return fn(err);
      fs.close(fd, function(err){
        fn(err, 6 == buf[0]);
      });
    });
  });
}
