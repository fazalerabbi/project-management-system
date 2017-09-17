const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');

const app = express();

//const userRoutes = require('./routes/users');
const config     = require('./config/app.js');

//connecting with mongo DB
mongoose.connect(config.database);

// On successful connection
mongoose.connection.on('connected', () => {
   console.log('Connected');
});

// On Error while connecting
mongoose.connection.on('error', (err) => {
    console.log(err);
});

// Port of express server
const PORT = config.port;

// Adding cors middleware
app.use(cors());

// Adding Body Parser Middle ware
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Adding user Routes

//app.use('/auth', userRoutes);

app.get('/auth/register', (req, res, next) => {
    res.send('Register');
});

app.post('/auth/login', (req, res, next) => {
    res.send('Login');
});

app.post('/auth/profile', (req, res, next) => {
    res.send('Profile');
});

app.post('/auth/settings', (req, res, next) => {
    res.send('Settings');
});

app.post('/auth/update-password', (req, res, next) => {
    res.send('Password Update');
});

// Start the express server
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server is Running on port " + PORT);
});