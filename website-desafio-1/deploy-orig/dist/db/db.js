"use strict";

var mongoose = require('mongoose');

var devUrl = 'mongodb://localhost/portfolio';
var prodUrl = 'mongodb+srv://francisco-savanapoint:Luisa@jaime1996@cluster0.jao6i.mongodb.net/portfolio?retryWrites=true&w=majority';
mongoose.connect(prodUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('Database is connected');
})["catch"](function (err) {
  return console.log('Database is not connected', err);
});
//# sourceMappingURL=db.js.map