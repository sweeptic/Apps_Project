const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects-controllers');


router.get('/:uid', projectsController.getProjectsById);

module.exports = router;