const Show = require("../models/Shows");

exports.getAllShows = (req, res, next) => {
  Show.find()
    .then((shows) => res.status(200).json(shows))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneShow = (req, res, next) => {
  Show.findById(req.params.id)
    .then((show) => res.status(200).json({
      id: show._id,
      name: show.name,
      description: show.description,
      date: show.date,
      hour: show.hour,
      place: show.place,
      usersrequired: show.usersrequired,
      coach: show.coach
    }))
    .catch((error) => res.status(400).json({ error }));
};

exports.createShow = (req, res, next) => {
  const show = new Show({
    ...req.body,
  });
  show
    .save()
    .then(() => res.status(201).json({ message: "Succès :)" }))
    .catch((error) => res.status(400).json({ error: error }));
};

exports.updateShow = (req, res, next) => {
  Show.updateOne({ _id: req.params.id }, { ...
    req.body
  })
    .then(() => res.status(200).json({ message: "Mise a jour effectuée" }))
    .catch((error) => res.status(400).json({ error: error }));
}

exports.deleteShow = (req, res, next) => {
  Show.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Le show a bien été supprimé !" }))
    .catch((error) => res.status(400).json({ error: error }));
};
