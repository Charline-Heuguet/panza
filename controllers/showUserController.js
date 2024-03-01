const ShowUser = require('../models/ShowsUser.js')

exports.getAllShowsUser = (req, res, next) => {
    ShowUser.find()
        .then((showsUser) => res.status(200).json(showsUser))
        .catch((error) => res.status(400).json({ error }));
}

exports.getOneShowUser = (req, res, next) => {
    ShowUser.findById(req.params.id)
        .then((showUser) => res.status(200).json({
            id: showUser._id,
            user: showUser.user,
            workshop: showUser.show,
            beginningDate: showUser.beginningDate,
            endDate: showUser.endDate
        }))
        .catch((error) => res.status(400).json({ error }));
}

exports.createShowUser = (req, res, next) => {
    const showUser = new ShowUser({
        ...req.body
    });
    showUser.save()
        .then(() => res.status(201).json({ message: " Succès :) " }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.updateShowUser = (req, res, next) => {
    ShowUser.updateOne({ _id: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ message: "Mise a jour effectuée" }))
        .catch(error => res.status(400).json({ error: error }));
}

exports.deleteShowUser = (req, res, next) => {
    ShowUser.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Suppression effectuée" }))
        .catch(error => res.status(400).json({ error: error }));
}
