const mongoose = require("mongoose")

const roleSchema = mongoose.Schema({
    name: { type: String, required: true },
    // permissions: [{ type: String, required: true }], // A voir si on le met ou pas
})

module.exports = mongoose.model("Role", roleSchema)