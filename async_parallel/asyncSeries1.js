ASYNC.SERIES IMPLMENETATION 1

'use strict';

var requesr = require('request');
var async = require('async');

var url = 'http://localhost:8800/';

async.series([
	function (callback) {
		request.get(url + 'getUserName?=1234', function (err, res, body) {
			console.log('Name:', JSON.parse(body).value);
			callback(null);
		});
	},

	function (callback) {
		request.get(url + 'getUserStatus?id=1234', function (err, res, body) {
			console.log('Status', JSON.parse(body).value);
			callback(null);
		});
	},

	function (callback) {
		request.get(url + 'getUserCountry?id=1234', function (err, res, body) {
			console.log('Country:', JSON.parse(body).value);
			callback(null);
		});
	},

	function (callback) {
		request.get(url + 'getUserAge?id=1234', function (err, res, body) {
			console.log('Age:', JSON.parse(body).value);
			callback(null);
		});
	}

]);