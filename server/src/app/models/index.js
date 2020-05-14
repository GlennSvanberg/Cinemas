

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    operatorsAliases: false,
    define: {
        timestamps: false
    }


});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cinema = require("./cinema.js")(sequelize, Sequelize);
db.movie = require("./movie.js")(sequelize, Sequelize);

module.exports = db;
