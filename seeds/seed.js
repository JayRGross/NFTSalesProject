const sequelize = require('../config/connection');
const { User, Favorite } = require('../models');

const userData = require('./userData.json');
const faveoritesData = require('./favoritesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Favorite.bulkCreate(faveoritesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
