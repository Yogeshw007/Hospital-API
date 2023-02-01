const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');

// register doctor
module.exports.register = async function (req, res) {
    const {
        username,
        password
    } = req.body;

    let doctor = await Doctor.findOne({ username });

    if (doctor) {
        return res.json(200, {
            messge: 'You have already registered'
        })
    }

    doctor = await Doctor.create({
        username,
        password
    });

    return res.json(200, {
        message: 'You have registered successfully!'
    });
}

// login doctor
module.exports.login = async function (req, res) {
    const {
        username,
        password
    } = req.body;

    let doctor = await Doctor.findOne({ username });

    if (doctor && doctor.password === password) {
        return res.json(200, {
            messge: 'You are logged in',
            token: jwt.sign(doctor.toJSON(), 'secret', { expiresIn: 3600 * 10 * 6 })
        })
    } else {
        return res.json(401, {
            message: 'You are not authorized'
        })
    }

}