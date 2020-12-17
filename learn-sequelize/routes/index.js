var express = require('express');
var router = express.Router();
const { User } = require('../models/index2');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll()
      .then((users) => {
        res.render('sequelize', { title: 'sequelize practice', users });
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
});

module.exports = router;
