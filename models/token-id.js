const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Favorite extends Model {
  checkFavorite(){

  }
}

Favorite.init(
  {
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    }
    tokenId: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }
  }
);

module.exports = Likes