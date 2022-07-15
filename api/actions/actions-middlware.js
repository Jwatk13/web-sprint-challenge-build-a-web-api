// add middlewares here related to actions
const Actions = require('./actions-model');

async function validateActionId(req, res, next) {
    let id = req.params.id;
    let action = await Actions.get(id)
    if (!action) {
        res.status(404).json({ message: "Action not found" });
        return;
    }
    req.action = action
    next();
}

function validateAction(req, res, next) {
    if (!project_id || !req.body.description || !req.body.notes) {
        res.status(400).json({ message: "Requires an existing project_id, a description, and a notes field to be filled out" });
        return;
    }
    req.project_id = {
        project_id: req.body.project_id
    };
    req.description = {
        description: req.body.description.length < 128
    };
    req.notes = {
        notes: req.body.notes
    };
    next();
}

module.exports = { validateActionId, validateAction };