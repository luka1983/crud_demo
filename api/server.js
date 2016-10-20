var app = require('express')()

app.get('/', (req, res) => { res.send('Hello World!'); });

var server = app.listen(3000, () => {
    var host = server.address().address;
    host = (host === '::') ? 'localhost' : host;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
});