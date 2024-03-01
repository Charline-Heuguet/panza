// on importe les paquets dont on a besoin
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json())

// LES CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permet de dire que tout le monde peut y accéder
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // L'autorisation ici de certains en-tête
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next(); // L'autorisation des différentes méthodes HHTP
});

// Connexion à la base de données
mongoose.connect("mongodb+srv://charlineheuguet:hFwS32tYn6fWpCaW@cluster0.cysglxj.mongodb.net/panza?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log(error))

// ROUTES 
// Déclaration des routes
const userRoutes = require('./routes/users.js');
const showRoutes = require('./routes/shows.js');
const workshopRoutes = require('./routes/workshops.js');
const rolesRoutes = require('./routes/roles.js');
const rolesUsersRoutes = require('./routes/rolesusers.js');
const showusersRoutes = require('./routes/showusers.js');

// On utilise les routes
app.use('/api/users', userRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/rolesusers', rolesUsersRoutes);
app.use('/api/showusers', showusersRoutes);

// On exporte l’application
module.exports = app;

// Lancer nodemon server