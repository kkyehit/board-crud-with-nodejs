const express = require('express');
const router = express.Router();
const webService = require('../service/WebService')

router.get("/", webService.index);



module.exports = router;