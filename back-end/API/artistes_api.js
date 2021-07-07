
var connectDB = require('./connexionDB');
exports.artists = (req, res) => {
    connectDB.query('select * from artists', function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
};

exports.details_artists = (req, res) => {
	let name = req.params.name
    connectDB.query('select * from artists where artists.name=?', name , function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
};
