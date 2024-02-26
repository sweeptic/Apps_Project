const HttpError = require('../models/http-error');
const User = require('../models/user');
const Project = require('../models/project');

const getProjectsById = async (req, res, next) => {
    console.log('GET');
    const userId = req.params.uid;

    let selectedUser;
    try {
        selectedUser = await User.findById(userId).populate('projects');
    } catch (err) {
        console.log('err', err);

        const error = new HttpError(
            'Fetching projects failed, please try again later.',
            500
        );
        return next(error);
    }
    console.log('getProjects', selectedUser);

    res.json({ projects: selectedUser.projects.map(user => user.toObject({ getters: true })) });
    // console.log('res', res);

};


exports.getProjectsById = getProjectsById;