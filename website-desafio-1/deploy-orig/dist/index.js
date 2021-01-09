"use strict";

var express = require('express');

var cors = require('cors');

require('./db/db');

var router = require('./routes/routes');

var app = express();
app.use(express.json());
app.use(cors());
app.use(router);
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server on http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map