'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	var id = querystring.parse(query)['id'];

	var result = {
		'pathname': pathname,
		'id': id,
		'value': Math.floor(Math.random()*100)
	};


	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(result));

}).listen(
	8800,
	function () {
		console.log('Echo server listening on port 8800');
	}	
);