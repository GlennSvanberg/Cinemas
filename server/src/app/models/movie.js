module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("Movie", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        cinemaId: {
            type: Sequelize.INTEGER
        }

    });

    return Movie;
};
