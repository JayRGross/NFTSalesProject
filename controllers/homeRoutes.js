const router = require('express').Router();
const { User, Favorite } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
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

router.get("/favorites",async(req, res) =>{

const user = await User.findByPk(req.session.user_id,{
  include: [{ model: Favorite }, ],
})

const serializedUser = user.get({plain:true})
res.render("favorites",{user:serializedUser})



// console.log (serializedUser)


})




module.exports = router;


