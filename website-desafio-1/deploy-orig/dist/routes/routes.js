"use strict";

var _contact = require("../controllers/contact.controller");

var _download = require("../controllers/download.controller");

var router = require('express').Router();

router.post('/contact', _contact.ContactController.receiveDatasForm);
router.post('/send-email', _download.DownloadController.sendEmail);
module.exports = router;
//# sourceMappingURL=routes.js.map