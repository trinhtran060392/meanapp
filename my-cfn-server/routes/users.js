var express = require('express');
var router = express.Router();

var userService = require('../services/user.service');
/* GET users listing. */
router.get('/list', list);

router.post('/', createUser);
router.delete('/:id', deleteUser);

function createUser(req, res) {
  userService.create(req.body).then(function () {
    res.sendStatus(200);
  }).catch(function (err) {
    res.status(400).send(err);
  });
}

function list(req, res) {
  userService.list().then(function (data) {
    res.json(data);
  });
}

function deleteUser(req, res) {
  userService.deleteUser(req.params.id).then(function () {
    res.sendStatus(200);
  });
};

module.exports = router;
