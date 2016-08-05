'use strict';

const request = require('request');
const async = require('async');

var url = 'http://localhost:8800/';

async.waterfall([

	function (callback) {
		request.get(url + 'getSessionId', function (err, res, body) {
			callback(null, JSON.parse(body).value);
		});
	},

	function (sId, callback) {
		request.get(url + 'getUserId?sessionId=' + sId, function (err, res, body) {
			callback(null, sId, JSON.parse(body).value);
		});
	},
]

	function (err, name, sId) {
		console.log('Name: ', name);
		console.log('SessionID:', sId);
	}
);

// Callback is pased as the last argument. It always follows a list of arguments for each paramter that is passed by the previous function, minus the err argument
// each step function always passes as the first parameter to the callback function.
