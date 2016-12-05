const router = require('express').Router();

router.use('/artists', require('./artistsRoutes'));
router.use('/songs', require('./songsRoutes'));

module.exports = router;