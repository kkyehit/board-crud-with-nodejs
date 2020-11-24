const fs = require('fs');
const boardRepository = require('../repository/BoardRepository');

const baseUrl = '\\..\\webapp\\';

exports.index = (req, res) =>{
    const html = 'index.html'
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + baseUrl + html));
}