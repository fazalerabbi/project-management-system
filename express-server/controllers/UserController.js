const User = require('../model/User');

let UserController = function () {}

UserController.prototype.profile = function (req, res, next) {
    const user = req.user;
    User.getUserById(user._id, (error, user) => {
        if(error) throw error;

        if(!user) {
            res.json({success: false, message: 'No user found'});
        } else {
            res.json({success: true, user: user});
        }
    });
}

UserController.prototype.updateProfile = function (req, res, next) {
    const data = req.body;
    console.log(data);
    const id = req.user._id;
    User.updateProfile(id, data, (error, user) => {
        if (error) throw error;

        res.json({success: true, user: user});
    });
}

UserController.prototype.settings = function (req, res, next) {
    req.send('settings');
}



UserController.prototype.updateSettings = function (req, res, next) {
    req.send('updateSettings');
}

UserController.prototype.updatePassword = function (req, res, next) {
    req.send('updatePassword');
}

module.exports = new UserController();