// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');

const router = express.Router();

//GET ARRAY OF ACTIONS
router.get('/', (req, res) => {

});

//GET AN ACTION
router.get('/:id', (req, res) => {

});

//CREATE A NEW ACTION
router.post('/', (req, res) => {

});

//UPDATE AN ACTION
router.put('/:id', (req, res) => {

});

//DELETE AN ACTION
router.delete('/:id', (req, res) => {

});

module.exports = router;