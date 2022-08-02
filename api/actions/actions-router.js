// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');
const { validateActionId, validateAction } = require('./actions-middlware');
const { getProjectsId } = require('../projects/projects-middleware');

const router = express.Router();

//GET ARRAY OF ACTIONS
router.get('/', (req, res, next) => {
    Actions.get(req.query.actions)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
});

//GET AN ACTION
router.get('/:id', validateActionId, (req, res) => {
    res.status(200).json(req.action)
});

//CREATE A NEW ACTION
router.post('/', validateAction, getProjectsId, async (req, res, next) => { 
    try {
        const newAction = await Actions.insert(req.body)
        res.json(newAction)
    } catch (err) {
        next(err)
    }
});

//UPDATE AN ACTION
router.put('/:id', validateActionId, validateAction, (req, res, next) => {
    const actionInfos = { ...req.description, ...req.notes, completed: true } 
    Actions.update(req.params.id, actionInfos)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(next)
});

//DELETE AN ACTION
router.delete('/:id', validateActionId, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json(req.action)
            }
        })
        .catch(next)
});

module.exports = router;