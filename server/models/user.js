var mongoose = require('mongoose');

//creating a model for a collection 'User', with validation and defaults


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User}
