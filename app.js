const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

/* EJS 사용 */
const ejs = require('ejs');
/* view engine으로 ejs를 사용한다. */
app.set('view engine', 'ejs');
/* template 폴더를 ./webapp으로 설정한다. */
app.set('views', './webapp');

app.use("/boards",require("./controller/BoardController"));
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(require("./config/SwaggerUiConfig").swaggerSpec ))
app.use("/web",require("./controller/WebController"));

app.listen(8080, () => {
    console.log("board crud server started");
    require('./repository/BoardRepository').DBconnect();
});

