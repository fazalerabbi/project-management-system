const express = require('express');
const router  = express.Router();

const UserController = require('../controllers/UserController');

router.get('/profile', (req, res, next) => {
    UserController.profile(req, res, next);
});

router.post('/profile', (req, res, next) => {
    UserController.updateProfile(req, res, next);
});

router.get('/settings', (req, res, next) => {
    UserController.settings(req, res, next);
});

router.post('/settings', (req, res, next) => {
    UserController.updateSettings(req, res, next);
});

router.post('/update-password', (req, res, next) => {
    UserController.updatePassword(req, res, next);
});

module.exports = router;
