const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
//drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
//    console.log("Drop and re-sync db.");
//});
testConnection(db.sequelize);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Testing, seems to work just fine..." });
});

require("./app/routes/cinema.routes")(app);
require("./app/routes/movie.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

async function testConnection(sequelize) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}