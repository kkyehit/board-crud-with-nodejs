const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const webService = require('../service/WebService')

router.get("/", webService.index);
router.get('/board', webService.inputBoard);



module.exports = router;