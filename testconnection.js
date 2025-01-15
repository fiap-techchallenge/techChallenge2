const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("plataforma_educacional", "user", "password", {
    host: "db", // Service name defined in docker-compose.yml
    dialect: "postgres",
    port: 5432, // Default PostgreSQL port
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });
