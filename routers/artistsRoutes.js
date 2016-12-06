const artistsRouter = require('express').Router();
const Artist = require('../models/artist-model');
// const Song = require('../models/song-model');
 
const getArtistsAz = (req, res) => {
	Artist.findAll({order: ['name']})
	.then((data) => {
		res.send(data)
	})
}

const getArtistsId = (req, res) => {
	Artist.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
}

const createArtist = (req, res) => {
	Artist.create(req.body)
	.then((data) => {
		res.send(data)
	})
}

const deleteArtist = (req, res) => {
	Artist.findById(req.params.id)
	.then((artist) => {
		artist.destroy()
	})
	.then (() => {
		res.send('Artist has been deleted.')
	})
}

const updateName = (req, res) => {
	console.log(req.params)
	Artist.findById(req.params.id)
	.then((artist) => {
		artist.update({name: req.params.newName})
	})
	.then (() => {
		res.send('Artist name has been updated.')
	})
}

artistsRouter.route('/')
	.get(getArtistsAz)
	.post(createArtist)


artistsRouter.route('/:id')
	.get(getArtistsId)
	.delete(deleteArtist)

artistsRouter.route('/:id/:newName')
	.put(updateName)

module.exports = artistsRouter; 