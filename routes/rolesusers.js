const express = require('express');
const router = express.Router();
const roleUserController = require('../controllers/roleUserController');

// GET
router.get('/', roleUserController.getAllRoleUsers);
router.get('/:id', roleUserController.getOneRoleUser);

// POST
router.post('/', roleUserController.createRoleUser);

// UPdate
router.put('/:id', roleUserController.updateRoleUser);

// DELETE
router.delete('/:id', roleUserController.deleteRoleUser);

module.exports = router;