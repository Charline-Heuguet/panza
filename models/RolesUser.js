const mongoose = require('mongoose');

const RolesUserSchema = mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    },
    role: {
        type: String,
        ref: 'Role',
        required: true
    },
})

module.exports = mongoose.model('RolesUser', RolesUserSchema)

// Table pivot entre User et roles