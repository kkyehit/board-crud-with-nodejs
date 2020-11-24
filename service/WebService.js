const fs = require('fs');
const boardRepository = require('../repository/BoardRepository');

const baseUrl = '\\..\\webapp\\';

exports.index = (req, res) =>{
    const html = 'index.html'
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + baseUrl + html));
}

exports.inputBoard = (req, res) => {
    const html = 'inputBoardPage.html';
    res.writeHead(200).end(fs.readFileSync(__dirname + baseUrl + html));
}

exports.boardDo = (req, res) => {
    const model = {
        title: req.body.title,
        author_name: req.body.author_name,
        content: req.body.content
    };
    boardRepository.createBoard(model).then(()=>{this.index(req, res);});
}