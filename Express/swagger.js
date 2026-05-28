const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express CRUD API",
      version: "1.0.0",
      description: "Simple CRUD API using Express and MongoDB",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  // Read swagger comments from server.js
  apis: ["./server.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
