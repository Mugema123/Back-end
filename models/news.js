const mongoose = require("mongoose")

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  Writter: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    
  }
});






module.exports = mongoose.model("news", schema);