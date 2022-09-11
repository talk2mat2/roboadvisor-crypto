
exports.swaggerDocument = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RoboAdvisor api docs",
      version: "0.1.0",
      description:
        "Apidocumentation for the roboadvisor projects",
      license: {
        name: "MIT",
        url: "",
      },
      contact: {
        name: "",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1",
      },
    ],
  },
  apis: ["./routes/schemas.js"],
};
