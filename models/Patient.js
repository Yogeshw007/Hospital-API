const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    status: {
        type: String,
        enum: ["Negative", "Travelled - Quarantine", "Symptoms - Quarantine", "Positive - Admit"]
    },
    phone: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;