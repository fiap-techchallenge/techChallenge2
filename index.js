const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
const postsRouter = require("./routes/posts");
const teachersRouter = require("./routes/teachers");
const studentsRouter = require("./routes/students");
const { router: authRouter } = require("./routes/auth");
const { swaggerUi, specs } = require("./Swagger/swagger");

app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false, // Disable credentials when using '*'
  }),
);

app.use(express.json());
app.use("/posts", postsRouter);
app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);
app.use("/auth", authRouter);

// Configurar o Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("Bem-vindo à Plataforma Educacional Tech Challenge Fiap!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
