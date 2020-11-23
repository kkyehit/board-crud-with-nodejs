const Sequelize = require('sequelize');
const sequelize = new Sequelize('board_db', 'root', 'root', {dialect: 'mysql'});

const Board = sequelize.define('boards_tb',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING
    },
    author_name:{
        type: Sequelize.STRING
    },
    content:{
        type: Sequelize.STRING
    }
});

module.exports = {
    sequelize: sequelize,
    Board : Board
};