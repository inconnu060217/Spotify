const connectDB = require('./connexionDB');
exports.genres = (req, res) =>{
    connectDB.query('select * from genres ', function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
}
exports.detail_genre = (req, res) =>{
    let name = req.params.name;
    connectDB.query('select * from genres where genres.name=?',name , function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
}

exports.detail_genres_albums = (req, res) =>{
    let name = req.params.name;
    connectDB.query('SELECT * FROM genres_albums INNER JOIN genres ON genres_albums.genre_id = genres.id INNER JOIN albums ON genres_albums.album_id = albums.id WHERE genres.name=?', name , function (error, results) {
	    if (error) throw error;
	    res.send(JSON.stringify(results));
	});
}