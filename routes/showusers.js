const express = require('express');
const router = express.Router();
const showuserController = require('../controllers/showUserController.js');

// GET
router.get('/', showuserController.getAllShowsUser);
router.get('/:id', showuserController.getOneShowUser);

// POST
router.post('/', showuserController.createShowUser);

// Update
router.put('/:id', showuserController.updateShowUser);

// DELETE
router.delete('/:id', showuserController.deleteShowUser);

module.exports = router;