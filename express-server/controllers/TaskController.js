const Task = require('../model/Task');

const TaskController = function () {}

TaskController.prototype.getOne = function (req, res, next) {
    const id = req.param('id');
    Task.getOne(id, (error, task) => {
        if (error) throw error;

        if(!task) {
            res.json({status: 201, success: false, message: 'No Task Found'});
        }

        res.json({status: 200, success: true, task: task});
    })
}

TaskController.prototype.getTasksByUserId = function (req, res, next) {
    const userId = req.user._id;
    Task.getTasksByUserId(userId, (error, tasks) => {
       if (error) throw error;

       if(!tasks) {
           res.json({status: 201, success: false, message: 'No tasks against this user'});
       }

       res.json({status: 200, success: true, tasks: tasks});
    });
}

TaskController.prototype.getTasksByProjectId = function (req, res, next) {
    const projectId = req.param('projectId');
    Task.getTasksByProjectId(projectId, (error, tasks) => {
        if (error) throw error;

        if(!tasks) {
            res.json({status: 201, success: false, message: 'No tasks against this user'});
        }

        res.json({status: 200, success: true, tasks: tasks});
    });
}

TaskController.prototype.create = function (req, res, next) {
    const task = req.body;
    const userId = req.user._id;
    Task.create(userId, task, (error, task) => {
        if (error) throw error;

        res.json({status: 200, success: true, task: task});
    })
}
TaskController.prototype.update = function (req, res, next) {
    const id = req.param('id');
    const task = req.body;

    Task.update(id, task, (error, task) => {
        if (error) throw error;

        res.json({status: 200, success: true, task: task});
    })
}

module.exports = new TaskController();