const restify = require('restify');

const server = restify.createServer({
  name: 'ISO',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.use(function(req, res, next) {
    console.warn('middleware');
    return next();
});

function sendV1(req, res, next) {
  res.send('hello ');
  return next();
}

function sendV2(req, res, next) {
  res.send("hola");
  return next();
}

server.get('/name/:name', function (req, res, next) {
res.send(`hello ${req.params.name}`);
return next();
});

server.get('/', restify.plugins.conditionalHandler([
  { version: '1.1.3', handler: sendV1 },
  { version: '2.0.0', handler: sendV2 }
]));
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

module.exports.server = server