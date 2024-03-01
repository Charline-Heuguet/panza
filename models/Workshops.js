const mongoose = require("mongoose")

const WorkshopsSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    hour : { type: String, required: true },
    place: { type: String, required: true },
    usersrequired: { type: Number, required: true },
    coach: { type: String, required: true },
})

module.exports = mongoose.model("Workshop", WorkshopsSchema)