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
                patientName: patient.name,
                patientPhone: patient.phone,
                doctor: patient.createdBy.username,
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
                patientName: patient.name,
                patientPhone: patient.Phone,
                doctor: patient.createdBy.name,
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
            patient.status.push(status);
            patient.date.push(new Date());

            await patient.save();

            return res.json(200, {
                messge: 'Patient status updated successfully',
                doctor: patient.createdBy.username,
                patientName: patient.name,
                reportStatus: status,
                date: patient.date[patient.date.length - 1]
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

// List of all patient
module.exports.genereteAllReports = async function (req, res) {

    try {
        let patient = await Patient.findById(req.params.id);

        let statusOfPatient = patient.status.map((status, index) => {
            return {
                status: status,
                date: patient.date[index]
            }
        });

        return res.json(200, {
            message: 'Patient reports genereted',
            statusOfPatient
        })
    } catch (e) {
        return res.json(500, {
            message: 'Internal server error',
        })
    }

}