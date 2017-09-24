const mongoose = require('mongoose');
const schema = mongoose.Schema;

const settingsSchema = schema({
    user_id: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    email_notification: {
       type: String,
       default: 'all'
    },
    no_my_changes_notification: {
        type: Boolean,
        default: false
    },
    hide_email: {
       type: Boolean,
        default: false
    }
});

const Settings = module.exports = mongoose.model('Settings', settingsSchema);

module.exports.getSettings = function (user_id, callback) {
    const query = { user_id, user_id };
    Settings.findOne(query, callback);
}

module.exports.updateSettings = function (user_id, data, callback) {
    const query = { user_id, user_id };
    Settings.findOneAndUpdate(query, data, {new: true}, (error, settings) => {
        if (error) throw error;

        if(!settings) {
            data.user_id = user_id;
            const settingsObj = new Settings(data);
            settingsObj.save(callback);
        }
        callback(null, settings);
    });
}

