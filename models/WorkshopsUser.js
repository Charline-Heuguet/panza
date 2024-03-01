const mongoose = require("mongoose")

const WorkshopsUserSchema = mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    workshop: {
        type: String,
        ref: 'Workshop',
        required: true
    },
    beginningDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
})

module.exports = mongoose.model('WorkshopsUser', WorkshopsUserSchema)

// Table de selection des ateliers