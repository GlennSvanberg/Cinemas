const db = require("../models");
const Movie = db.movie;
const Op = db.Sequelize.Op;

// Retrieve all Movies from the database.
exports.findAll = (res) => {

    Movie.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
};

// Find movies By Cinema
exports.findByCinemaId = (req, res) => {
    const cinemaId = req.query.id;

    Movie.findAll({
        where: {
            cinemaId: cinemaId
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
};
