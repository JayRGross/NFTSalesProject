const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/fav', favRoutes);
// do I need to duplicate this to userRoutes as well

module.exports = router;
