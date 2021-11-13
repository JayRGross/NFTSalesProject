const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {
  
}

Favorite.init(
  {
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }, 
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);

module.exports = Favorite