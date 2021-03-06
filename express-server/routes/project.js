const express = require('express');
const ProjectController = require('../controllers/ProjectController');

const router = express.Router();

router.get('/projects', (req, res, next) => {
    ProjectController.getAll(req, res, next);
});

router.get('/project/:id', (req, res, next) => {
    ProjectController.getOne(req, res, next);
});
router.post('/projects/create', (req, res, next) => {
    ProjectController.create(req, res, next);
});

router.put('/projects/:id/edit', (req, res, next) => {
    ProjectController.update(req, res, next);
});

module.exports = router;
