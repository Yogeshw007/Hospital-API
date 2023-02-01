const Patient = require('../models/Patient');

module.exports.reports = async function (req, res) {
    let status = req.params.status;
    let patients = await Patient.find({ status });

    return res.json(200, {
        message: `Patients with status ${status}`,
        patients: patients
    })
}