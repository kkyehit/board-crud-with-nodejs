const express = require('express');
const router = express.Router();

// 요청 body의 데이터에 접근하기 위해 필요하다.
// body-parser는 미들웨어로 express 객체 함수 중 use()를 사용하여 추가한다.
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

const service = require('./user.service');

// GET /users
router.get('/', service.index);

// GET /users/{userId}
router.get('/:id', service.getUser);

// DELETE /users/:id
router.delete('/:id', service.deleteUser);

// POST /users
router.post('/', service.addUser);

// PUT /users
router.put('/', service.modifyUser);


module.exports = router;