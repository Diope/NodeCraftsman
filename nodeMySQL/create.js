'use strict';

const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

connection.query('CREATE DATABASE nodejs', function (err) {
	if (err) {
		console.log('Could not create database "node": ' + err);
	}
});

connection.query('USE nodejs', function (err) {
	if (err) {
		console.log('Could not switch to database "node".');
	}
});

connection.query('CREATE TABLE test ' +
				'(id INT(11) AUTO_INCREMENT, ' +
				' content VARCHAR(255), ' +
				' PRIMARY KEY(id))',
	function (err) {
		if (err) {
			console.log('Could not create table "test".');
		}
	}
);

connection.query('INSERT INTO test (content) VALUES ("Hello")');
connection.query('INSERT INTO test (content) VALUES ("World!")');

connection.end();