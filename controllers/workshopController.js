const Workshop = require('../models/workshops');

//READ
exports.getAllWorkshops = (req, res, next) => {
    Workshop.find()
    .then((workshop) => res.status(200).json(workshop))
    .catch((error) => res.status(400).json({ error }))
}

// READ BY ID
exports.getWorkshopById = (req, res, next) => {
    Workshop.findOne({ _id: req.params.id })
    .then((workshop) => res.status(200).json({
        id: workshop._id,
        name: workshop.name,
        description: workshop.description,
        date: workshop.date,
        hour: workshop.hour,
        place: workshop.place,
        usersrequired: workshop.usersrequired,
        coach: workshop.coach
    }))
    .catch((error) => res.status(404).json({ error }));
}

//CREATE
exports.createWorkshop = (req, res, next) => {
    const workshop = new Workshop({
        ...req.body
    });
    workshop.save()
    .then(() => res.status(201).json({ message: 'Workshop created!' }))
    .catch((error) => res.status(400).json({ error }));
}


//UPDATE
exports.updateWorkshop = (req, res, next) => {
    Workshop.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Workshop updated!' }))
    .catch((error) => res.status(400).json({ error }));
}

//DELETE
exports.deleteWorkshop = (req, res, next) => {
    Workshop.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Workshop deleted!' }))
    .catch((error) => res.status(400).json({ error }));
}