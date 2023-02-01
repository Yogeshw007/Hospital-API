const Patient = require('../models/Patient');

// reports with specific status
module.exports.reports = async function (req, res) {
    let status = req.params.status;
    let patients = await Patient.find({ status });

    let patientsWithSpecificStatus = patients.map((patient) => {
        if (patient.status[patient.status.length - 1] === status) {
            return patient.name;
        }
    })

    return res.json(200, {
        message: `Patients with status ${status}`,
        patients: patientsWithSpecificStatus
    })
}