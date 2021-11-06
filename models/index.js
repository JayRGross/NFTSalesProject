const User = require('./User');
const Favorite = require('./Favorite');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  // The association can also be created from the Car side
  Favorite.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Favorite };
