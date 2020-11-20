const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!\n');
 });

app.use(express.static("index"));

app.listen(3000, () => {
  console.log('Express example app listening on port 3000!');
});