const router = require('express').Router();

// doctors end point
router.use('/doctors', require('./doctor'));

// patients end point
router.use('/patients', require('./patient'));

// reports end point
router.use('/reports', require('./report'));

module.exports = router;