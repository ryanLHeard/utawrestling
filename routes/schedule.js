/**
 * Created by ryan on 9/21/2015.
 */
var express = require('express');
var router = express.Router();
var db = require('mongoskin').db('mongodb://reportsUser:123456789@ec2-52-89-197-230.us-west-2.compute.amazonaws.com:27017/team');
var tournaments = {};

db.collection('schedule').find().toArray(function(err, result) {
  if (err) throw err;

  tournaments =  result;
  //console.log(wrestler)
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('schedule', { title: '2015 Schedule', "tournaments": tournaments});
});

module.exports = router;

