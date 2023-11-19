
const mongoose = require('mongoose');

// connect from mongodb
// mongoose.connect('mongodb://localhost:27017/Review-System');
mongoose.connect('mongodb://0.0.0.0:27017/employee_review', {useNewUrlParser: true, useUnifiedTopology: true});

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'er0ror connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;