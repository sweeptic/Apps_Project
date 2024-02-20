const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const placesRoutes = require('./routes/places-routes');
// const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;


app.use(bodyParser.json());

// app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
    console.log('setHeader');


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

// app.use('/api/places', placesRoutes);
// app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error; // stop function execution
});

app.use((error, req, res, next) => {
    // if (req.file) {
    //     fs.unlink(req.file.path, err => {
    //         console.log(err);
    //     });
    // }
    if (res.headerSent) {
        return next(error);
    }

    console.log('error code/message to response', error);

    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });
