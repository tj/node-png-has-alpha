
var hasAlpha = require('./');

hasAlpha('batcat.png', function(err, yes){
  if (err) throw err;
  console.log('batcat: %s', yes ? 'yes' : 'no');
});

hasAlpha('macbook.png', function(err, yes){
  if (err) throw err;
  console.log('macbook: %s', yes ? 'yes' : 'no');
});

var fs = require('fs');

var buf = fs.readFileSync('macbook.png');
console.log('macbook: %s', hasAlpha(buf) ? 'yes' : 'no');

var buf = fs.readFileSync('batcat.png');
console.log('batcat: %s', hasAlpha(buf) ? 'yes' : 'no');
