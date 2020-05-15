module.exports = app => {
    const cinemas = require("../controllers/cinema.js");
    const movies = require("../controllers/movie.js");
    var router = require("express").Router();

    // Retrieve all Cinemas
    router.get("/", cinemas.findAll);

    // Retrieve Movies by CinemaId
    router.get('/movies', movies.findByCinemaId);

    app.use('/api/cinema', router);
};
