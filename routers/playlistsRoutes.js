const playlistsRouter = require('express').Router();
const Playlist = require('../models/playlist-model');
const Song = require('../models/song-model');
const Artist = require('../models/artist-model');
const Genre = require('../models/genre-model');

const getAllPlaylists = (req, res) => {
	Playlist.findAll({ 
		include: [{
			model: Song, 
			include: [Artist, Genre]
		}]
	})
	.then((data) => {
		res.send(data)
	})
}

const getPlaylistsById = (req, res) => {
	Playlist.findById(req.params.id, 
		{include: [{
			model: Song, 
			include: [Artist, Genre]
		}]
	})
	.then((data) => {
		res.send(data)
	})
}

const createPlaylist = (req, res) => {
	Playlist.create({title: req.body.title})
	.then((playlist) => {
		playlist.addSongs(JSON.parse(req.body.song))
	})
	.then(() => {
		res.send('Playlist has been created.')
	})
}

const deletePlaylist = (req, res) => {
	Playlist.findById(req.params.id)
	.then((playlist) => {
		playlist.destroy()
	})
	.then(() => {
		res.send('Playlist has been deleted.')
	})
}

playlistsRouter.route('/')
	.get(getAllPlaylists)
	.post(createPlaylist)

playlistsRouter.route('/:id')
	.get(getPlaylistsById)
	.delete(deletePlaylist)

module.exports = playlistsRouter;