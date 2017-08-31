const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, './frontend/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || 3030, () => {
  console.log('server listening at https://localhost:3030 yo');
});

module.exports = app;
