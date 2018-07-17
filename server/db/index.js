const { conn, Sequelize } = require('./conn');
const User = require('./models/User');

const sync = () => {
  return conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    User.create({ name: 'Mario' }),
    User.create({ name: 'Luigi' })
  ])
}

module.exports = {
  conn,
  Sequelize,
  sync,
  seed,
  models: {
    User
  }
}