// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

//GET ARRAY OF PROJECTS
router.get('/', (req, res) => {

});

//GET PROJECTS BY ID
router.get('/:id', (req, res) => {

});

//CREATE A NEW PROJECT
router.post('/', (req, res) => {

});

//UPDATE A PROJECT
router.put('/:id', (req, res) => {

});

//DELETE A PROJECT
router.delete('/:id', (req, res) => {

});

//GET ARRAY OF ACTIONS FOR A PROJECT
router.get('/:id/actions', (req, res) => {

});

module.exports = router;