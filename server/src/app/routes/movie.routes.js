module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Retrieve all Movies
    router.get("/", movies.findAll);

    app.use('/api/movie', router);
};
