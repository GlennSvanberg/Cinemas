const db = require("../models");
const Cinema = db.cinema;

// Retrieve all Cinemas from the database.
exports.findAll = (req, res) => {
    Cinema.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cinemas."
            });
        });
};

