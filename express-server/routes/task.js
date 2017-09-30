const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/tasks', (req, res, next) => {
    TaskController.getTasksByUserId(req, res, next);
});
router.get('/task/:id', (req, res, next) => {
    TaskController.getOne(req, res, next);
});
router.post('/tasks/create', (req, res, next) => {
    TaskController.create(req, res, next);
});
router.put('/task/:id/edit', (req, res, next) => {
    TaskController.update(req, res, next)
});

module.exports = router;