/**
 * @swagger
 * tags:
 *   name: Board
 *   description: 게시판 CRUD
 */
 
/**
 * @swagger
 * /boards:
 *   get:
 *     summary: 사용자 정보 가져오기
 *     description: "사용자 정보 리스트"
 *     operationId: "getBoardList"
 *     produces:
 *       - "application/json"
 *     tags: [boards]
 *     parameters:
 *       - in: query
 *         name: pageNum
 *         type: string
 *         description: 페이지 번호
 *         required: true
 *     responses:
 *       "200":
 *          description: "successful operation"
 *          schema : 
 *            type : "array"
 *            items :
 *              $ref: "#/definitions/Board"
 *       "400":
 *          description: "Invaild"
 */

 /**
  * @swagger
  * definitions:
  *   Board:
  *     tpye: "object"
  *     properties:
  *       id:
  *         type: "integer"
  *         format: "int64"
  *       title:
  *         type: "string"
  *       author_name:
  *         type: "string"
  *       content:
  *         type: "string"
  *       createdAt:
  *         type: "datetime"
  */
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