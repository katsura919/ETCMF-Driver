const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Driver API',
      version: '1.0.0',
      description: 'API for managing drivers and authentication',
      contact: {
        name: 'Your Name',
        email: 'your-email@example.com',
      },
    },
    servers: [
      {
        url: `http://localhost:5000`, 
      },
    ],
  };
  
  module.exports = swaggerDefinition;
  