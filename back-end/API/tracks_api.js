const connectDB = require('./connexionDB');
exports.tracks = (req, res) =>{
    let name = req.params.name;
    connectDB.query('select * from tracks where tracks.name=?', name , function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
}