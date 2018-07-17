const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const db = require('./db');

app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../public/index.html')))

app.use('/api', require('./routes'));

app.listen(port, () => console.log(`** PORT ${port} **`));

db.sync()
  .then(() => db.seed())
