const userModel = require('./user.model');

// GET /users
exports.index = (req, res) => 
  userModel.User.findAll().then(user =>{
    return res.json(user);
  }
);

// GET /users/{userId}
exports.getUser = (req, res) =>{
    // id가 숫자인지 확인, 
    // parseInt()는 인자가 숫자가 아니라면 NaN을 리턴한다.
    const id = parseInt(req.params.id, 10);
    // if에서 NaN은 false와A 동일하다.
    if(!id) return res.status(400).json({error:'Incorrect Id'});
    
    // filter()는 배열의 요소를 점검하면서 기준을 통과하는 요소를 별로의 배열에 담는 역할
    /*
    let user = users.filter(user => user.id === id);
    if(!user || user.length == 0) return res.status(404).json({error: "Unkown user"});
    return res.json(user);
    */
    
   userModel.User.findOne({
      where: {
        id: id
      }
    }).then(user => {
      if (!user) {
        return res.status(404).json({error: 'No User'});
      }
  
      return res.json(user);
    });
};

// DELETE /users/:id
exports.deleteUser =(req, res) => {
    // id가 숫자인지 확인, 
    const id = parseInt(req.params.id, 10);
    if(!id) return res.status(400).json({error:'Incorrect Id'});
/*
    // users 배열에서 id에 해당하는 user의 index가져오기
    const userIndex = users.findIndex(user => {return user.id === id;});
    // id에 해당하는 user가 없다면 -1을 리턴한다.
    if(userIndex === -1) return res.status(404).json({error: "Unkown user"});
    console.log("delete ["+id+"] in ["+userIndex+"]");
    //users에서 index에 해당하는 user지우기
    users.splice(userIndex, 1);
    res.status(20 s).send();
*/
    userModel.User.destroy({
      where: {
        id: id
     }
    }).then(() => res.status(204).send());
};

// POST /users
exports.addUser =(req, res) => {
    //req.body를 통해 body값에 접근할 수 있다.
    const name = req.body.name || '';
    if(name.length == 0) res.status(400).json({error:"Incorrect name"});
    // reduce(functon(result, obj), defualt)
    //     result는 함수의 결과를 담을 변수이다.
    //     obj는 배열의 요소가 차례대로 담기는 배열이다.
    //     defualt는 result의 초기 값을 의미한다.
    /*
    const id = users.reduce((maxId, user) => user.id > maxId ? user.id : maxId, 0) + 1;
    const user = {id: id, name: name};
    users.push(user);
    res.status(204).send();
    */

    userModel.User.create({
      name: name
    }).then((user) => res.status(201).json(user));
  };

// PUT /users/:id
exports.modifyUser = (req, res) => {
  const name = req.body.name || '';
  const id = req.body.id || '';
  userModel.User.update(
    {name: name},
    {where: {id: id}}
  ).then((user) => res.status(201).json(user));
}

/*
  let users = [
    {
      id: 1,
      name: 'alice'
    },
    {
      id: 2,
      name: 'bek'
    },
    {
      id: 3,
      name: 'chris'
    }
  ]
  */