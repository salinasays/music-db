const genresRouter = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

const genresAZ = (req, res) => {
	Genre.findAll({
		order: ['title']
	})
	.then((data) => {
		res.send(data)
	})
}

const genreById = (req, res) => {
	Genre.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
}

const createGenre = (req, res) => {
	Genre.create(req.body)
	.then(() => {
		res.send('New genre has been added to database.')
	})
}

const updateGenreName = (req, res) => {
	Genre.findById(req.params.id)
	.then((genre) => {
		genre.update({title: req.params.newGenre})
	})
	.then(() => {
		res.send('Genre name has been updated.')
	})
}

genresRouter.route('/')
	.get(genresAZ)
	.post(createGenre)

genresRouter.route('/:id')
	.get(genreById)

genresRouter.route('/:id/:newGenre')
	.put(updateGenreName)

module.exports = genresRouter;