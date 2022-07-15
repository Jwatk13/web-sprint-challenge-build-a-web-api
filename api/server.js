const express = require('express');
const helmet = require('helmet');

const server = express();

const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

server.use(helmet())
server.use(express.json());
// server.use('/api/actions', actionsRouter);
// server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send(`
        <h1>Web Sprint Challenge Build-a-Web-API</h1>
        <p>Welcome to the sprint challenge project!</p>
    `);
});

server.use((error, req, res, next) => {
    console.log(error);
    res.status(error.status || 500).json({
      customMessage: 'Something tragic has happened inside the router',
      message: error.message,
      stack: error.stack,
    });
  });

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
