var express = require('express');
var router = express.Router();
var db = require('mongoskin').db('mongodb://reportsUser:123456789@ec2-52-89-197-230.us-west-2.compute.amazonaws.com:27017/team');
var wrestler = {};

db.collection('wrestlers').find().toArray(function(err, result) {
  if (err) throw err;

  wrestler =  result;
  //console.log(wrestler)
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wrestlers', { title: 'UTA Wrestlers', people: wrestler });
});
module.exports = router;
