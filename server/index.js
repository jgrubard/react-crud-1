const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.listen(port, () => console.log(`** PORT ${port} **`));

db.sync()
  .then(() => {
    db.seed();
  })
