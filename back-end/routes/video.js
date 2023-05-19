const router = require('express').Router();

const {getAllVideos, getSpecificUserVideos} = require('../controllers/video');

router.get('/', getAllVideos);
router.get('/:username', getSpecificUserVideos);

module.exports = router;