const express = require('express');
const app = express();

app.use('/users', require('./user/user.controller'));

app.listen(3000, () => {
  console.log('RestAPI example app listening on port 3000!');

});

module.exports = app;