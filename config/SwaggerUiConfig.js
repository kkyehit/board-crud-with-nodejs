const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Board Project',
        version: "1.0.0",
        decription: "Board API"
    },
    host: 'localhost:8080',
    basePath: '/'
};

const option = {
    swaggerDefinition,
    apis: ['./controller/BoardController.js']
};

const swaggerSpec = swaggerJSDoc(option);

module.exports = {
    swaggerSpec: swaggerSpec
};