module.exports = (sequelize, Sequelize) => {
    const ConatctMe = sequelize.define("contactme", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      }
    });
  
    return ConatctMe;
  };