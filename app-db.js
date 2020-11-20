const express = require('express');
const app = express();

app.use('/users', require('./user/user.controller'));

app.listen(3000, () => {
  console.log('RestAPI example app listening on port 3000!');
  
  //sync()는 데이터베이스에 모델을 테이블로 생성한다.
  //force는 테이블을 다시 만들지 여부를 결정한다.
  require('./user/user.model').sequelize.sync({force:true})
    .then(() =>{
      console.log('DB Sync');
    });
});

module.exports = app;