const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Song = require('./song-model');

var Playlist = sequelizeConnection.define('playlist', {
	title: {
	    type: Sequelize.STRING,
	    validate: {
	    	len: [1,100],
	    	notEmpty: true
	    }
	}
});

// Playlist.belongsTo(Genre);

Playlist.belongsToMany(Song, {through: 'playlist_song'});
Song.belongsToMany(Playlist, {through: 'playlist_song'});


module.exports = Playlist;
