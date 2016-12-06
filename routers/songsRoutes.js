const songsRouter = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

const getAllSongs = (req, res) => {
	Song.findAll({ 
		include: [Artist, Genre]
	})
	.then((data) => {
		res.send(data)
	})
}

const getSong = (req, res) => {
	Song.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
}

const createSong = (req, res) => {
	function helperFunc(artistId){
		//console.log(artist)
		var newSong = {
			title: req.body.title,
			youtube_url: req.body.youtube_url,
			artistId: artistId
		}
		Song.create(newSong)
		.then((song) => {
			song.addGenres(JSON.parse(req.body.genre))
		})
		.then((data) => {
			res.send('you added a new song!')
		})
	}
	Artist.findOne({
		where: {
			name: req.body.name
		}	
	})
	.then((artist) => {
		helperFunc(artist.id)
	})
	.catch((err) => {
		Artist.create({name: req.body.name}).then((artist) =>{
			helperFunc(artist.id)
		})
	})
}

const updateSongTitle = (req, res) => {
	Song.findById(req.params.id)
	.then((song) => {
		song.update({title: req.params.newTitle})
	})
	.then(() => {
		res.send('Song title has been updated.')
	})
}

const deleteSong = (req, res) => {
	Song.findById(req.params.id)
	.then((song) => {
		song.destroy()
	})
	.then(() => {
		res.send('Song has been deleted.')
	})
}

songsRouter.route('/')
	.get(getAllSongs)
	.post(createSong)

songsRouter.route('/:id')
	.get(getSong)
	.delete(deleteSong)

songsRouter.route('/:id/:newTitle')
	.put(updateSongTitle)

module.exports = songsRouter;




