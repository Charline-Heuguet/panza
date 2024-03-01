const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// GET
router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);

// POST
router.post('/', roleController.createRole);

// UPdate
router.put('/:id', roleController.updateRole);

// DELETE
router.delete('/:id', roleController.deleteRole);

module.exports = router;