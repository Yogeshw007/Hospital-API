const router = require('express').Router();

router.use('/doctors', require('./doctor'));
router.use('/patients', require('./patient'));
router.use('/reports', require('./report'));

module.exports = router;