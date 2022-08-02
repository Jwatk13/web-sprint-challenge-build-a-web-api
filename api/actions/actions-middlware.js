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
    if (!req.body.description || !req.body.notes) {
        res.status(400).json({ message: "Requires a description and a notes field to be filled out" });
        return;
    } else if (req.body.description > 128) {
        res.status(400).json({ message: "Description must be less than 129 characters long" });
        return;
    } else {
        next();  
    }
    
}

module.exports = { validateActionId, validateAction };