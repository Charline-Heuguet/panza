// Description: fichier fait pour les routes

const express = require('express');
const router = express.Router();
const showController = require('../controllers/showController');

// GET
router.get('/', showController.getAllShows);

router.get('/:id', showController.getOneShow);

// POST
router.post('/', showController.createShow);

// Update
router.put('/:id', showController.updateShow);

// DELETE
router.delete('/:id', showController.deleteShow);

module.exports = router;