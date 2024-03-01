const mongoose = require("mongoose")

const ShowsUserSchema = mongoose.Schema({
    User: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    Workshop: {
        type: mongoose.Types.ObjectId,
        ref: 'Workshop',
    },
    beginningDate: { type: String, required: true },
    endDate: { type: String, required: true },
})

module.exports = mongoose.model('ShowsUser', ShowsUserSchema)

// Table de selection des spectacles