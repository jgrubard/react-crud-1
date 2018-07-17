const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react_crud_1_db');

module.exports = { conn, Sequelize };