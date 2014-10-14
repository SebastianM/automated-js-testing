var connect = require('connect');
var serveStatic = require('serve-static');
console.log('Listen on http://localhost:9999/');
connect().use(serveStatic(__dirname)).listen(9999);