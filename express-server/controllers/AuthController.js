const User = require('../model/User');

let AuthController = function () {}

AuthController.prototype.register = function (req, res, next) {
    User.register(req.body, (error, user) => {
        if (error) {
            res.json({success: false, message: 'Registration Failed'});
        } else {
            res.json({success:true, message: 'You are register successfuly.'})
        }
    });
}

AuthController.prototype.login = function (req, res, next) {
    User.login(req.body, (error, token, user) => {
        if (error) {
            res.json({success: false, message: 'Login Failed'});
        } else {
            res.json({success:true, message: 'You are Login successfuly.', token: token, user: user})
        }
    });
}

module.exports = new AuthController();