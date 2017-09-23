/**
 * Step 1: Require mongoose.
 *
 * Step 2: Create Scheme
 *
 * Step 3: export Scheme as mongoose Model
 *
 */
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/app');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    occupation: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByEmail = function (email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
}
module.exports.updateProfile = function (id, data, callback) {
    User.findByIdAndUpdate(id, data, callback);
}

module.exports.getUserByUserName = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.register = function (user, callback) {
    let userObj = new User(user);
    bcrypt.genSalt(10, (error, salt) => {
        if (error) throw error;
        bcrypt.hash(userObj.password, salt, (error, hash) => {
            if(error) throw error;
            userObj.password = hash;
            userObj.save(callback);
        });
    });
}

module.exports.login = function (user, callback) {
    const username = user.username;
    const password = user.password;

    User.getUserByUserName(username, (error, user) => {
        if(error){
            throw error;
        }
        if(!user) {
            return callback(true, null, null);
        }
        User.comparePassword(password, user.password, (error, isMatch) => {
            if(error) {
                throw error;
            }
            if(isMatch) {
                const token = jwt.sign({data: user}, config.secretKey, {
                   expiresIn: config.tokenExpiryTime
                });
                callback(null, 'JWT '+token, {
                    id: user._id,
                   name: user.name,
                   email: user.email,
                   username: user.username,
                });
            } else {
                return callback(true, null, null);
            }
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (error, isMatch) => {
        if (error) throw error;
        callback(null, isMatch);
    });
}