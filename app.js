const express = require('express');
const app = express();

app.use("/boards",require("./controller/BoardController"));

app.listen(8080, () => {
    console.log("board crud server started");
    require('./repository/BoardRepository').DBconnect();
});

