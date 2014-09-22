
var restify = require('restify');

var server = restify.createServer({
    name: 'MyApp'
});

function sendUpdates(req, res, next) {
    res.send({
        updates:
            [ {
                friend: 'bob',
                update: 'Did something scary'
            }]});
    return next();
}
server.get('/updates', sendUpdates);

server.listen(8080);
