const express = require('express');
const router = express.Router();
const workshopsUserController = require('../controllers/workshopsUserController.js');

// GET
router.get('/', workshopsUserController.getAllWorkshopsUser);
router.get('/:id', workshopsUserController.getOneWorkshopUser);

// POST
router.post('/', workshopsUserController.createWorkshopUser);

// Update
router.put('/:id', workshopsUserController.updateWorkshopUser);

// DELETE
router.delete('/:id', workshopsUserController.deleteWorkshopUser);

module.exports = router;