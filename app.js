const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

app.use("/boards",require("./controller/BoardController"));
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(require("./config/SwaggerUiConfig").swaggerSpec ))
app.use("/web",require("./controller/WebController"));

app.listen(8080, () => {
    console.log("board crud server started");
    require('./repository/BoardRepository').DBconnect();
});

