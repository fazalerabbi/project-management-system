const User      = require('../model/User');
const Settings  = require('../model/Settings');

let UserController = function () {}

UserController.prototype.profile = function (req, res, next) {
    const userId = req.user;
    User.getUserById(userId, (error, user) => {
        if(error) throw error;

        if(!user) {
            res.json({status: 201, success: false, message: 'No user found'});
        } else {
            res.json({status: 200, success: true, user: user});
        }
    });
}

UserController.prototype.updateProfile = function (req, res, next) {
    const data = req.body;
    const id = req.user._id;

    User.updateProfile(id, data, (error, user) => {
        if (error) throw error;

        res.json({status: 200, success: true, user: user});
    });
}

UserController.prototype.settings = function (req, res, next) {
    const user_id = req.user._id;

    Settings.getSettings(user_id, (error, settings) => {
        if(error) throw error;

        if(settings) {
            res.json({status: 200, success: true, settings: settings});
        } else {
            settings = {
                user_id: user_id,
                email_notification:'all',
                no_my_changes_notification: false,
                hide_email: false
            }

            res.json({status: 200, success: true, settings: settings });
        }
    });
}

UserController.prototype.updateSettings = function (req, res, next) {
    const data = req.body;
    const user_id = req.user._id;

    Settings.updateSettings(user_id, data, (error, settings) => {
        if(error) throw error;

        res.json({status: 200, success: true, settings: settings});
    });
}

UserController.prototype.updatePassword = function (req, res, next) {
    req.send('updatePassword');
}

module.exports = new UserController();