// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');
const { validateProjectId, validateProject } = require('./projects-middleware');

const router = express.Router();

//GET ARRAY OF PROJECTS
router.get('/', (req, res, next) => {
    Projects.get(req.query.projects)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
});

//GET PROJECTS BY ID
router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project)
});

//CREATE A NEW PROJECT
router.post('/', validateProject, (req, res, next) => {
    const projectInfo = { ...req.name, ...req.description, ...req.completed}
    Projects.insert(projectInfo)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
});

//UPDATE A PROJECT
router.put('/:id', validateProjectId, validateProject, (req, res, next) => {
    const projectInfos = { ...req.name, ...req.description, ...req.completed } 
    Projects.update(req.params.id, projectInfos)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
});

//DELETE A PROJECT
router.delete('/:id', validateProjectId, (req, res, next) => {
    Projects.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json(req.project)
            }
        })
        .catch(next)
});

// //GET ARRAY OF ACTIONS FOR A PROJECT
router.get('/:id/actions', validateProjectId, (req, res, next) => {
    Projects.getProjectActions(req.params.id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
});

module.exports = router;