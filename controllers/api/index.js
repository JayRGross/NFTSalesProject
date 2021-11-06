const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoritesRoutes = require("./favoriteroutes")

router.use('/users', userRoutes);

router.use('/favorites', favoritesRoutes);


// do I need to duplicate this to userRoutes as well

module.exports = router;
