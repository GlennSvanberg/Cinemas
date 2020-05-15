module.exports = (sequelize, Sequelize) => {
    const Cinema = sequelize.define("Cinemas", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Cinema;
};
