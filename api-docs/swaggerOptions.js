const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDefinition');

const swaggerOptions = {
  swaggerDefinition,
  apis: ['./routes/authRoutes.js', './api-docs/api/authSwagger.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
