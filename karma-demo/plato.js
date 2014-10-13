var plato = require('plato');

var files = [
  'js/reverse.js',
];

var outputDir = './code-complexity';
// null options for this example
var options = {
  title: 'Demo Report'
};

var callback = function (report){
// once done the analysis,
// execute this
console.log('done');
};

plato.inspect(files, outputDir, {}, callback);