// Table pivot pour workshop et users
const WorkshopUser = require('../models/WorkshopsUser')

exports.getAllWorkshopsUser = (req, res, next) => {
    WorkshopUser.find()
        .then((workshopsUser) => res.status(200).json(workshopsUser))
        .catch((error) => res.status(400).json({ error }));
}

exports.getOneWorkshopUser = (req, res, next) => {
    WorkshopUser.findById(req.params.id)
        .then((workshopUser) => res.status(200).json({
            id: workshopUser._id,
            user: workshopUser.user,
            workshop: workshopUser.workshop,
            beginningDate: workshopUser.beginningDate,
            endDate: workshopUser.endDate
        }))
        .catch((error) => res.status(400).json({ error }));
}

exports.createWorkshopUser = (req, res, next) => {
    const workshopUser = new WorkshopUser({
        ...req.body
    });
    workshopUser.save()
        .then(() => res.status(201).json({ message: " Succès :) " }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.updateWorkshopUser = (req, res, next) => {
    WorkshopUser.updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: "Mise a jour effectuée" }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.deleteWorkshopUser = (req, res, next) => {
    WorkshopUser.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Suppression effectuée" }))
        .catch(error => res.status(400).json({ error: error }));
}