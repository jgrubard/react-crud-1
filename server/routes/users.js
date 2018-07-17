const app = require('express').Router();
// const { Sequelize } = require('../');
module.exports = app;

const { Sequelize, models } = require('../db');
const { User } = models;

app.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});