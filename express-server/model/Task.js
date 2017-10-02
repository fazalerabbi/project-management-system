const mongoose = require('mongoose');

const schema = mongoose.Schema;

const taskSchema = schema({
    tracker: {
        type: Number,
        //required: true
    },
    project_id: {
        type: schema.Types.ObjectId,
        ref: 'Project'
    },
    title: {
        type: String,
        //required: true
    },
    description: {
        type: String,
        //required: true
    },
    status: {
        type: Number,
        //required: true
    },
    priority: {
        type: Number,
        //required: true
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    assignee: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    created_by: {
        type: schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    parent_id: {
        type: schema.Types.ObjectId,
        ref: 'Task'
    },
    estimate_hour: {
        type: Number,
    },
    percent_done: {
        type: Number,
        default: 0
    },
    watchers: [
        {
            type: schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Task = module.exports = mongoose.model('Task', taskSchema);

module.exports.getOne = function (id, callback) {
    Task.findById(id)
        .populate('project_id', 'name')
        .populate('assignee', 'name')
        .populate('created_by', 'name')
        .populate('watchers', 'name')
        .populate('parent_id', 'title')
        .exec(callback);
}

module.exports.getTasksByUserId = function (userId, callback) {
    const query = { $or:[ {assignee:userId}, {created_by:userId} ]};
    Task.find(query, callback);
}

module.exports.getTasksByProjectId = function (projectId, callback) {
    const query = { project_id: projectId };
    Task.find(query, callback);
}

module.exports.create = function (userId, task, callback) {
    task.created_by = userId;
    const taskNew = new Task(task);
    taskNew.save(callback);
}

module.exports.update = function (id, task, callback) {
    Task.findByIdAndUpdate(id, task, {new: true}, callback);
}
