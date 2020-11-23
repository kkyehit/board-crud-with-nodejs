const boardModel = require('../model/BoardModel');

exports.DBconnect = () => {
    boardModel.sequelize.sync({force:true});
};

exports.createBoard = (model) => {
    return boardModel.Board.create(model);
};

exports.findBoardById = (id) => {
    return boardModel.Board.findOne({
        where: {
            id: id
        }
    });
};
exports.findBoardByPage = (pageNum) => {
    const boardPerPage = 5;
    const offset = parseInt(boardPerPage) * pageNum;
    return boardModel.Board.findAll({
        offset: offset ? offset : 0,
        limit: boardPerPage
    });
};

exports.updateBoard = (model) => {
    return boardModel.Board.update(
        {
            title: model.title,
            content: model.content,
            author_name: model.author_name
        }, 
        {where: {id: model.id}}
    );
};

exports.deleteBoard = (id) =>{
    return boardModel.Board.destroy(
        {where: {id: id}}
    );
}