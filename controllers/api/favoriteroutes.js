const router = require('express').Router();
const { User,Favorite  } = require('../../models');


router.get("/",async(req,res)=>{ 
 const favorites= await Favorite.findAll()
 console.log (favorites)

 res.json(favorites)


})

// find routes that find fav's by a users ID
// also need a route that can create a fav and a route that delete a fav

module.exports = router;
