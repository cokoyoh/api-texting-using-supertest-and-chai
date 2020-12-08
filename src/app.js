const express = require('express');

const app = express();

app.get('/courses', (req, res) => {
  res.status(200).json({ name: 'api testing' });
});

app.get('/course', (req, res) => {
  const name = req.query.name;
  res.json({ id: '1', name });
});

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  let name;
  if (id === '1') {
    name = 'mocha';
  };
  res.json({ id: id, name });
});

app.post('/course', (req, res) => {
  const name = req.body.name;
  res.json({ id: 2, name });
})

module.exports = app;