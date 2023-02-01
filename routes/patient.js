const router = require('express').Router();
const passport = require('passport');

const patientController = require('../controllers/patientController');

router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register);
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientController.createReport);

module.exports = router;