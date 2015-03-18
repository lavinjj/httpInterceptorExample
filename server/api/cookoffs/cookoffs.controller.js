'use strict';

var _ = require('lodash');
var Cookoffs = require('./cookoffs.model');

// Get list of cookoffs
exports.index = function(req, res) {
  Cookoffs.find(function (err, cookoffs) {
    if(err) { return handleError(res, err); }
    return res.json(200, cookoffs);
  });
};

// Get a single cookoffs
exports.show = function(req, res) {
  Cookoffs.findById(req.params.id, function (err, cookoffs) {
    if(err) { return handleError(res, err); }
    if(!cookoffs) { return res.send(404); }
    return res.json(cookoffs);
  });
};

// Creates a new cookoffs in the DB.
exports.create = function(req, res) {
  Cookoffs.create(req.body, function(err, cookoffs) {
    if(err) { return handleError(res, err); }
    return res.json(201, cookoffs);
  });
};

// Updates an existing cookoffs in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cookoffs.findById(req.params.id, function (err, cookoffs) {
    if (err) { return handleError(res, err); }
    if(!cookoffs) { return res.send(404); }
    var updated = _.merge(cookoffs, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cookoffs);
    });
  });
};

// Deletes a cookoffs from the DB.
exports.destroy = function(req, res) {
  Cookoffs.findById(req.params.id, function (err, cookoffs) {
    if(err) { return handleError(res, err); }
    if(!cookoffs) { return res.send(404); }
    cookoffs.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
