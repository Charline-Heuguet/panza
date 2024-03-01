const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const usersSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    nbparticipation: { type: Number, required: true, default: 0 },
})

// Ceci est un plugin qui permet de s'assurer que deux utilisateurs ne peuvent pas utiliser la même adresse e-mail.
usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", usersSchema)