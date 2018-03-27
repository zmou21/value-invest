module.exports = function(sequelize, DataTypes) {
  var Analysis = sequelize.define("analysis", {
    ticker: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    forwardPE: {
      type: DataTypes.FLOAT
    },
    price: {
      type: DataTypes.FLOAT
    }
  });
  return Analysis;
};
