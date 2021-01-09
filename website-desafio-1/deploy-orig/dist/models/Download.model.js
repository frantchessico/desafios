"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Email = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Email', Email);
//# sourceMappingURL=Download.model.js.map