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

// const createSong = (req, res) => {
// 	Artist.findOrCreate({where: {name: req.body.artist}})
// 	.then((data)=> {
// 		var newSong = {
// 			title: req.body.title,
// 			artistId: req.body.artistId,
// 		    youtube_url: (req.body.youtube_url) ? req.body.youtube_url : null
// 		}
// 	Song.create(newSong)
// 	.then((song) => {
// 		console.log(req.body.genre)
// 		song.addGenres(JSON.parse(req.body.genre))
// 	})
// })

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

songsRouter.route('/')
	.get(getAllSongs)
	.post(createSong)

songsRouter.route('/:id')
	.get(getSong)

module.exports = songsRouter;




