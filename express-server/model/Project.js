const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projectScheme = schema({
    name: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    users: [
        { type: schema.Types.ObjectId, ref: 'User' }
    ]
    /*users: [
            {type: String}
    ]*/
});

const Project = module.exports = mongoose.model('Project', projectScheme);

module.exports.getProjectsByUserId = function (user_id, callback) {
    const query = { "users": user_id };
    Project.find(query).populate('users', 'name').exec(callback);
}

module.exports.getOne = function (id, callback) {
    Project.findById(id, callback);
}

module.exports.create = function (user_id, project, callback) {
    //console.log(project);
    /*if(project.users.length > 0) {
        project.users.forEach((user, index) => {
            user[index] = mongoose.Types.ObjectId(user.id);
        });
    }*/
    project.users.push(user_id);
    console.log(project);
    const myProject = new Project(project);
    myProject.save(callback);
}

module.exports.update = function (id, project, callback) {
    Project.findByIdAndUpdate(id, project, {new: true}, callback);
}

