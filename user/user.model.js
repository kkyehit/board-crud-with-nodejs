const Sequelize = require('sequelize');
//Sequelize([DBNAME],[USER],[PW],[dialect])
//dialect는 옵션이지만 db에대한 설정을 할 수 있고 없으면 에러남. (v4.0.0 부터 에러나는 듯)
const sequelize = new Sequelize('test','root','root',{ dialect: 'mysql' });

//define()함수를 이용하여 모델을 만들 수 있다.
//define([table name], {})
const User = sequelize.define('test_tb', {
    name: Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    User: User
}