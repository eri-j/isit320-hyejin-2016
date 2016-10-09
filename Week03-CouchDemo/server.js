// var nano = require('nano')('http://localhost:5984');
var nano = require('nano')('http://168.156.47.46:5984');

var docName = 'bigNames';
var dbName = 'bc_data';

var readIt = function() {
	var prog = nano.db.use(dbName);
	prog.get(docName, { revs_info: true }, function(err, body) {
		if (!err)
			console.log(body);
	});
};

function insert() {
	nano.db.create(dbName);
	var prog = nano.db.use(dbName);

	prog.insert({"doc": [
		{ "firstName": "Suzie", "lastName": "Higgins"},
		{ "firstName": "Harry", "lastName": "Potter"},
		{ "firstName": "Hyejin", "lastName": "Jun"}
	]},
	docName, function(err, body) {
		if (!err)
			console.log(body);
		readIt();
	});

	// prog.insert({ 'firstName': 'Suzie', 'lastName': 'Higgins'}, docName, function(err, body) {
	//   if (!err)
	// 	console.log(body);
	// 	readIt();
	// });
}

insert();
// readIt();