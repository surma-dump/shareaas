var connect = require('connect'),
    sharejs = require('share').server;

var options = {
	db: {type: 'none'},
	browserChannel: { cors:"*" }
};

var server = connect.createServer();
// Attach the sharejs REST and Socket.io interfaces to the server
sharejs.attach(server, options);

var port = process.env.PORT || 8055
server.listen(port, function(){
    console.log('Server running at http://127.0.0.1:'+port);
});
