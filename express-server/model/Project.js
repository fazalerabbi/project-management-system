const mongoose = require('mongoose');
const schema = mongoose.Schema;

/*mongoose.set('debug', true);*/

const projectScheme = schema({
    name: {
      type: String,
      required: true
    },
    description: {
        type: String
    },
    created_at: {
      type: Date,
      default: Date.now()
    },
    users: {
        type: Array,
        required: true
    }
    /*users: [
        {
            user: {
                type: schema.Types.ObjectId,
                ref: 'User'
            },
            isOwner: {
                type: Boolean
            }

        }
    ]*/
});

const Project = module.exports = mongoose.model('Project', projectScheme);

module.exports.getProjectsByUserId = function (userId, callback) {
    const query = { "users._id": userId };
    Project.find(query).populate(
        {
            path: 'users._id',
            model: 'User',
            select: 'name'
        })
        .exec(callback);
}

module.exports.getOne = function (id, callback) {
    Project.findById(id).populate({
        path:'users._id',
        model: 'User',
        select: 'name'
    }).exec(callback);
}

module.exports.create = function (userId, project, callback) {
    //console.log(project);
    if(project.users !== undefined && project.users.length > 0) {
        project.users.forEach((user, index) => {
            user._id = mongoose.Types.ObjectId(user._id);
        });
    }
    project.users.push({
        _id: userId,
        isOwner: true
    });
    const myProject = new Project(project);
    myProject.save(callback);
}

module.exports.update = function (id, project, callback) {
    if(project.users.length > 0) {
        project.users.forEach((user) => {
            user._id = mongoose.Types.ObjectId(user._id._id);
        });
    }
    Project.findByIdAndUpdate(id, project, {new: true}, callback);
}

