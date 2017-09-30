const Project = require('../model/Project');

let ProjectController = function () {}

ProjectController.prototype.getAll = function (req, res, next)  {
    const user_id = req.user._id;
    Project.getProjectsByUserId(user_id, (error, projects) => {
        if (error) throw error;
        res.json({status: 200, success: true, projects: projects});
    })
}
ProjectController.prototype.getOne = function (req, res, next)  {
    const id = req.param('id');
    Project.getOne(id, (error, project) => {
        if (error) throw error;
        res.json({status: 200, success: true, project: project});
    })
}


ProjectController.prototype.create = function (req, res, next)  {
    const project = req.body;
    const user_id = req.user._id;
    Project.create(user_id, project, (error, project) => {
        if(error) throw error;

        if(project) {
            res.json({status: 200, success: true, message: 'Project has been created successfuly', project: project});
        } else {
            res.json({status: 200, success: true, message: 'Error occurred while creating project'});
        }
    })
}

ProjectController.prototype.update = function (req, res, next)  {
    const id = req.param('id');
    const data = req.body;
    Project.update(id, data, (error, project) => {
        if (error) throw error;

        res.json({status: 200, success: true, project: project});
    });
}


module.exports = new ProjectController();