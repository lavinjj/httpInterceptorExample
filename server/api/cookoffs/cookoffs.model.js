'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CookoffsSchema = new Schema({
  name: String,
  info: String,
  eventDate: Date,
  webSite: String,
  contactName: String,
  contactPhone: String,
  contactEmail: String,
  kcbsRep: String,
  contextNumber: Number,
  prizeMoney: Number,
  active: Boolean
});

module.exports = mongoose.model('Cookoffs', CookoffsSchema);
