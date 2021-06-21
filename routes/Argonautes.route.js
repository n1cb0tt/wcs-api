const express = require('express');
const router = express.Router();
const ArgonautesController = require('../controllers/Argonautes.controller');

router
    .get('/', ArgonautesController.getAll)
    .get('/:id', ArgonautesController.getOne)
    .post('/', ArgonautesController.create)
    .put('/:id', ArgonautesController.update)
    .delete('/:id', ArgonautesController.delete);

module.exports = router;