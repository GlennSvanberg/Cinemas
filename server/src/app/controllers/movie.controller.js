const db = require("../models");
const Movie = db.movie;
const Op = db.Sequelize.Op;

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
    const cinemaId = req.query.cinemaid;



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

