var fs = require('fs');

const baseUrl = '\\..\\webapp\\';

exports.index = (req, res) =>{
    const html = 'index.html'
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + baseUrl + html));
}