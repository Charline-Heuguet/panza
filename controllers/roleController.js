const Role = require('../models/Roles');

exports.getAllRoles = (req, res, next) => {
  Role.find()
    .then((roles) => res.status(200).json(roles))
    .catch((error) => res.status(400).json({ error }));
}

exports.getRoleById = (req, res, next) => {
  Role.findById(req.params.id)
    .then((role) => res.status(200).json(role))
    .catch((error) => res.status(400).json({ error }));
}

exports.createRole = (req, res, next) => {
  const role = new Role({
    ...req.body
  });
  role.save()
    .then(() => res.status(201).json({ message: "Le role a bien été créé !" }))
    .catch(error => res.status(400).json({ error: error }));
}

exports.updateRole = (req, res, next) => {
  Role.updateOne({ _id: req.params.id }, { ...req.body })
      .then(() => res.status(200).json({ message: "L'utilisateur a bien été mis à jour !" }))
      .catch(error => res.status(400).json({ error: error }));
}

exports.deleteRole = (req, res, next) => {
  Role.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Le role a bien été supprimé !" }))
      .catch(error => res.status(400).json({ error: error }));
}