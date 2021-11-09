const router = require('express').Router();
const { User,Favorite  } = require('../../models');


router.get("/",async(req,res)=>{ 
 const favorites= await Favorite.findAll()
 console.log (favorites)

 res.json(favorites)


})

// router.get("/", async(req, res) => {
//   const userFavorites = await Favorite.findAll(User)
//   console.log (userFavorites)
//   res.json(userFavorites)
// })
// find routes that find fav's by a users ID

router.post('/', (req, res) => {
    console.log(req.session, req.body);
    const favoriteData = {
        user_id: req.session.user_id,
        ...req.body,
    }
  Favorite.create(favoriteData)
    .then((newFavorite) => {
      res.json(newFavorite);
    })
    .catch((err) => {
      res.json(err);
    });
})


// also need a route that can create a fav and a 

// route that delete a fav


router.delete('/:favorite_id', (req, res) => {
  
  Favorite.destroy({
    where: {
      id: req.params.favorite_id,
    },
  })
    .then((deletedFavorite) => {
      res.json(deletedFavorite);
    })
    .catch((err) => res.json(err));
});



// test all with insomnia


module.exports = router;
