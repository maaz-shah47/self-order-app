const express = require('express');
const data = require('./data');

const app = express();

app.get('/api/categories', (req, res, next) => {
  res.json(data.categories);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
