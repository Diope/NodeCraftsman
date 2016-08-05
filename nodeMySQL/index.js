'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodejs'
});

var query = connection.query('SELECT id, content FROM test');

query.on('error', function (err) {
	console.log('A database error occured: ' + err);
});

query.on('fields', function (fields) {
	console.log('Received fields information. ');
	console.log(fields);
});

query.on('results', function (results) {
	console.log('Received result: ');
	console.log(results);
});

query.on('end', function () {
	console.log('Query execution has finished.');
	connection.end();
});