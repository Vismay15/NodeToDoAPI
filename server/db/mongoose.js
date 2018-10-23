var mongoose = require('mongoose');

//setting the promise to the default javascript promise
mongoose.Promise = global.Promise;

//connecting to the mongodb server and 'test' database in it
mongoose.connect('mongodb://localhost:27017/test');

//exporting the mongoose object
module.exports = {mongoose};
