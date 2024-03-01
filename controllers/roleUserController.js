// Description: CRUD for roleUser
const RoleUser = require('../models/RolesUser');

exports.getAllRoleUsers = (req, res, next) => {
    RoleUser.find()
        .then((roleUsers) => res.status(200).json(roleUsers))
        .catch((error) => res.status(400).json({ error }));
}

exports.getOneRoleUser = (req, res, next) => {
    RoleUser.findById(req.params.id)
        .then((roleUser) => res.status(200).json({
            id: roleUser._id,
            user: roleUser.user,
            role: roleUser.role
        }))
        .catch((error) => res.status(400).json({ error }));
}

exports.createRoleUser = (req, res, next) => {
    const roleUser = new RoleUser({
        ...req.body
    });
    roleUser.save()
        .then(() => res.status(201).json({ message: "Le role a bien été créé !" }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.updateRoleUser = (req, res, next) => {
    RoleUser.updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: "Le role a bien été mis à jour !" }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.deleteRoleUser = (req, res, next) => {
    RoleUser.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Le role a bien été supprimé !" }))
        .catch(error => res.status(400).json({ error: error }));
}