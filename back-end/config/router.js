'use strict';

const importer = require('anytv-node-importer');

module.exports = function(router) {
	// creates a GET method on route '/'
	// router.get('/', function(req, res, next){
	// 	res.send('Hello World!');
	// })

	const __ = importer.dirloadSync(__dirname + '/../controllers');
	router.get('/', __.hello.hello);

	return router;
}