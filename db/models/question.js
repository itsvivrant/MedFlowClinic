'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    voteCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.User, {foreignKey: "userId"})
    Question.hasMany(models.Answer, {foreignKey: "questionId"})
  };
  return Question;
};
