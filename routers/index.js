const router = require('express').Router();

router.use('/artists', require('./artistsRoutes'));
router.use('/songs', require('./songsRoutes'));
router.use('/playlists', require('./playlistsRoutes'));
router.use('/genres', require('./genresRoutes'));

module.exports = router;