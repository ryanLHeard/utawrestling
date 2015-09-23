/**
 * Created by ryan on 9/21/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('schedule', { title: '2015 Schedule' });
});

module.exports = router;

