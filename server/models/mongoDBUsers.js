const mongoose = require('mongoose');

const URI = process.env.MONGO_URI

mongoose.connect(URI, () => console.log('mongoose database connected'));

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  likes: {
    type: Array,
  }
})

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
