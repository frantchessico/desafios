const router = require('express').Router()

import { ContactController } from '../controllers/contact.controller';
import {  DownloadController } from '../controllers/download.controller';


router.post('/contact', ContactController.receiveDatasForm)
router.post('/send-email', DownloadController.sendEmail)

module.exports = router