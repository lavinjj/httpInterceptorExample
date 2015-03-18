'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CookoffsSchema = new Schema({
  name: String,
  info: String,
  eventDate: Date,
  webSite: String,
  active: Boolean
});

module.exports = mongoose.model('Cookoffs', CookoffsSchema);
