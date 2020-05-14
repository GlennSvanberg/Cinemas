module.exports = (sequelize, Sequelize) => {
    const Cinema = sequelize.define("Cinemas", {

        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Cinema;
};
