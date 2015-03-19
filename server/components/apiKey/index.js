'use strict';

module.exports = function checkApiKey(req, res) {
  var apiKey = req.param('apiKey');
  if (!apiKey || apiKey !== '41d27c46-f837-40bf-8b1b-f7fb37d26c09') {
    console.log('Invalid Api Key: ' + apiKey);
    return res.status(404).send('Not Authorized, Missing ApiKey');
  }

};
