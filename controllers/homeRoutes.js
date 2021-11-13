const router = require('express').Router();
const { User, Favorite } = require('../models');
const withAuth = require('../utils/auth');
const axios =require ('axios')

router.get('/', withAuth, async (req, res) => {
  try {

    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});





router.get("/favorites",async(req, res) =>{

  // const user = await User.findByPk(req.session.user_id,{
  //   include: [{ model: Favorite }, ],
  // })

  // const serializedUser = user.get({plain:true})
  const favData = await Favorite.findAll({
    where: {
      user_id: req.session.user_id
    }
  })

  const favorites = favData.map(data=> data.get({plain: true}));

  console.log(favorites)

  res.render("favorites",{layout:'fav', favorites})



  // console.log (serializedUser)


})




module.exports = router;


