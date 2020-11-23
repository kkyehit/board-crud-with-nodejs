const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const boardService = require("../service/BoardService");

// GET / : board list
router.get('/', boardService.getBoardList);

// GET /:id : board contents
router.get('/:id', boardService.getBoard);

// PUT /
router.put('/:id', boardService.modifyBoard);

// POST /
router.post('/', boardService.addBoard);

// DELETE /:id
router.delete('/:id', boardService.deleteBoard);


module.exports = router;