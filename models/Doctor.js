const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    patients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ]
}, {
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;