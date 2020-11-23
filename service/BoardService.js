const boardRepository = require('../repository/BoardRepository');

exports.getBoardList = (req, res) =>{
    const pageNum = parseInt(req.query.pageNum, 10);
    console.log("Called getBoardList() ... query="+req.query.pageNum+"->"+pageNum);
    
    boardRepository.findBoardByPage(pageNum)
        .then((boards)=>res.status(200).json(boards));
}

exports.getBoard = (req, res) => {
    console.log("Called getBoard() ... id = "+req.params.id);
    boardRepository.findBoardById(req.params.id)
        .then((model)=> {
            if(model != null) res.status(201).json(model)
            else res.status(400).json({err: "no data"});
        });
}


exports.modifyBoard = (req, res) => {
    console.log("Called modifyBoard() ... id = "+req.params.id);

    const model = { 
        id: req.params.id,
        title: req.body.title,
        author_name : req.body.author_name,
        content : req.body.content
    };
    boardRepository.updateBoard(model)
        .then((board)=> res.status(201).json(board))
}

exports.addBoard = (req, res) => {
    console.log("Called addBoard ()");
    const model = { 
        title: req.body.title,
        author_name : req.body.author_name,
        content : req.body.content
    };
    boardRepository.createBoard(model)
        .then((model)=> res.status(201).json(model))
        .catch((err) => res.status(500).json(err));
}

exports.deleteBoard = (req, res) => {
    console.log("Called deleteBoard() ... "+req.body.id);
    boardRepository.deleteBoard(req.params.id)
        .then(() => res.status(204).send());
}