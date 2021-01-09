"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Contact = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Contact', Contact);
//# sourceMappingURL=Contact.model.js.map