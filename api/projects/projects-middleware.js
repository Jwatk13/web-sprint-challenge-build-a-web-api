// add middlewares here related to projects
const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
    let id = req.params.id;
    let project = await Projects.get(id)
    if (!project) {
        res.status(404).json({ message: "Project not found" });
        return;
    }
    req.project = project
    next();
}

function validateProject(req, res, next) {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({ message: "Requires both name and description fields to be filled out" });
        return;
    }
    req.name = {
        name: req.body.name
    };
    req.description = {
        description: req.body.description
    };
    next();
}

function getProjectsId(req, res, next) {
    let id = req.params.id;
    req.id = id
    next()
}

module.exports = { validateProjectId, validateProject, getProjectsId };