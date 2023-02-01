const router = require('express').Router();
const passport = require('passport');

const reportController = require('../controllers/reportController');

router.get('/:status', passport.authenticate('jwt', { session: false }), reportController.reports);

module.exports = router;