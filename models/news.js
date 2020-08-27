const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
  },
  Writter: {
    type: String,
  },
  date: {
    type: Date,

    default: Date.now,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("news", schema);
