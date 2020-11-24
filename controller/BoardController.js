/**
 * @swagger
 * tags:
 *   name: Board
 *   description: 게시판 CRUD
 */
 
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const boardService = require("../service/BoardService");

// GET / : board list
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
router.get('/', boardService.getBoardList);

// GET /:id : board contents

/**
 * @swagger
 * /boards/{id}:
 *   get:
 *     summary: 게시글의 세부 정보 가져오기
 *     description: "게시글 세부 내용"
 *     operationId: "getBoard"
 *     produces:
 *       - "application/json"
 *     tags: [boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         description: 게시판 id
 *         required: true
 *     responses:
 *       "200":
 *          description: "successful operation"
 *          schema :
 *            $ref: "#/definitions/Board"
 *       "400":
 *          description: "No Data"
 */
router.get('/:id', boardService.getBoard);

// PUT /
/**
 * @swagger
 * /boards/{id}:
 *   put:
 *     summary: 게시글 수정
 *     description: "게시글 수정"
 *     operationId: "modifyBoard"
 *     produces:
 *       - "application/json"
 *     tags: [boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         description: 게시판 id
 *         required: true
 *       - in: "body"
 *         name: "body"
 *         description: 게시판 추가/수정 모델
 *         required: true
 *         schema:
 *           $ref: "#/definitions/addBoard"
 *     responses:
 *       "204":
 *          description: "successful operation"
 */
router.put('/:id', boardService.modifyBoard);

// POST /
/**
 * @swagger
 * /boards:
 *   post:
 *     summary: 게시글 추가
 *     description: "게시글 추가"
 *     operationId: "addBoard"
 *     produces:
 *       - "application/json"
 *     tags: [boards]
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: 게시판 추가/수정 모델
 *         required: true
 *         schema:
 *           $ref: "#/definitions/addBoard"
 *     responses:
 *       "204":
 *          description: "successful operation"
 */
router.post('/', boardService.addBoard);

// DELETE /:id
/**
 * @swagger
 * /boards/{id}:
 *   delete:
 *     summary: 게시글 삭제
 *     description: "게시글 삭제"
 *     operationId: "deleteBoard"
 *     produces:
 *       - "application/json"
 *     tags: [boards]
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         description: 게시판 id
 *         required: true
 *     responses:
 *       "204":
 *          description: "successful operation"
 */
router.delete('/:id', boardService.deleteBoard);


module.exports = router;