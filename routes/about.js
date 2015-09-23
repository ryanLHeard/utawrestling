/**
 * Created by ryan on 9/21/2015.
 */var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About UTA Wrestling' });
});

module.exports = router;
