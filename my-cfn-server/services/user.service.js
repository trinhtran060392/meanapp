var config = require('../config.json');
var _ = require('lodash');

var q = require('q');
var mongoose = require('mongoose');
mongoose.connect(config.dbUrl);

var userSchema = new mongoose.Schema({
  name: String,
  password: String
});

var User = mongoose.model('Users', userSchema);

var service = {
  getById : getById,
  create: create,
  list: list,
  deleteUser: deleteUser
};
module.exports = service;

function getById(_id) {
  var deferred = q.defer();

  db.users.findById(_id, function (err, user) {
    if (err) deferred.reject(err.name);
    if (user) {
      deferred.resolve(_.omit(user, 'hash'));
    } else deferred.resolve();
  });

  return deferred.promise;
}

function create(user) {
  var deferred = q.defer();
  var user = new User(user);
  user.save(function (err) {
    if (err) deferred.reject(err.message);
    deferred.resolve();
  });

  return deferred.promise;

}

function list() {
  var deferred = q.defer();
  User.find(function (err, users) {
    if (err) deferred.reject(err.message);
    deferred.resolve(users);
  });

  return deferred.promise;
}

function deleteUser(_id) {
  var deferred = q.defer();
  console.log(_id);
  User.findByIdAndRemove(_id, function (err, user) {
    if (err) deferred.reject(err.message);
    deferred.resolve();
  });

  return deferred.promise;
}


