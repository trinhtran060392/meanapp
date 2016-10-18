var express = require('express');
var router = express.Router();

/* GET home page. */

var temp = [
  {
    name: "a",
    value: 9,
    min: 2,
    max: 10
  },{
    name: "b",
    value: 4,
    min: 1,
    max: 9
  },{
    name: "c",
    value: 6,
    min: 0,
    max: 10
  },{
    name: "d",
    value: 8,
    min: 1,
    max: 10
  }
];

router.get('/', function(req, res, next) {
  res.json(temp);
});

module.exports = router;
