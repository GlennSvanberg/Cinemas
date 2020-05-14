module.exports = app => {
    const cinemas = require("../controllers/cinema.controller.js");

    var router = require("express").Router();

    // Retrieve all Cinemas
    router.get("/", cinemas.findAll);

    app.use('/api/cinema', router);
};
