const express = require('express');
const router = express.Router();

router.get('register', (req, res, next) => {
    res.send('Register');
});

router.post('login', (req, res, next) => {
    res.send('Login');
});

router.post('profile', (req, res, next) => {
    res.send('Profile');
});

router.post('settings', (req, res, next) => {
    res.send('Settings');
});

router.post('update-password', (req, res, next) => {
    res.send('Password Update');
});

module.exports = router;