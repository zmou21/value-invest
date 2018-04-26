module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comment", {
    name: { //commentors name
      type: DataTypes.STRING
    },
    email: { // commentors email
      type: DataTypes.STRING,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING,
    }
  });

  return Comments;
};
