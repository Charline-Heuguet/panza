const express = require('express');
const router = express.Router();
const workshopController = require('../controllers/workshopController');

// GET
router.get('/', workshopController.getAllWorkshops);
router.get('/:id', workshopController.getWorkshopById);

// POST
router.post('/', workshopController.createWorkshop);

// Update
router.put('/:id', workshopController.updateWorkshop);

// DELETE
router.delete('/:id', workshopController.deleteWorkshop);

module.exports = router;