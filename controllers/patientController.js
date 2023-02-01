const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Patient register
module.exports.register = async function (req, res) {
    try {
        const { phone, name } = req.body;
        let patient = await Patient.findOne({ phone: phone }).populate('createdBy');

        console.log('patient found', patient)

        if (patient) {
            return res.json(200, {
                message: 'Patient already registered',
                patientInfo: patient
            })
        } else {
            patient = await Patient.create({
                phone: phone,
                name: name,
                createdBy: req.user
            });

            let doctor = await Doctor.findById(req.user.id);

            doctor.patients.push(patient);

            await doctor.save();

            return res.json(200, {
                message: 'Patient registered successfully!',
                patientInfo: patient
            })
        }
    } catch (e) {
        return res.json(500, {
            message: 'Internal server error'
        })
    }

}

// Create report of patients 
module.exports.createReport = async function (req, res) {
    try {
        const { status } = req.body;
        const patientId = req.params.id;

        let patient = await Patient.findById(patientId).populate('createdBy');

        if (patient) {
            patient.status = status;

            await patient.save();

            return res.json(200, {
                messge: 'Patient status updated successfully',
                patientInfo: patient
            })
        } else {
            return res.json(200, {
                message: 'Patient not found please register'
            })
        }
    } catch (e) {
        return res.json(500, {
            message: 'Internal server error'
        })
    }
}