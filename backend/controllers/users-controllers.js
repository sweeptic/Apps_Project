const HttpError = require('../models/http-error');
const User = require('../models/user');
const Project = require('../models/project');

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}).populate('projects');
    } catch (err) {
        console.log('err', err);

        const error = new HttpError(
            'Fetching users failed, please try again later.',
            500
        );
        return next(error);
    }
    console.log('getUsers');

    res.json({ users: users.map(user => user.toObject({ getters: true })) });
    // console.log('res', res);

};


exports.getUsers = getUsers;