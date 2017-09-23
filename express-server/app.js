const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');

const app = express();

const config     = require('./config/app');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

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
app.use(bodyParser.urlencoded({ extended: true }));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Adding user Routes
app.use('/auth', authRoutes);
app.use('/my',passport.authenticate('jwt', {session: false}), userRoutes);

// Start the express server
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server is Running on port " + PORT);
});