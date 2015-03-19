'use strict';

var CryptoJS = require("crypto-js");

function encodeMessage(msg) {
  return CryptoJS.AES.encrypt(msg, "Secret Passphrase");
}

function decodeMessage(msg) {
  return CryptoJS.AES.decrypt(msg.packet, "Secret Passphrase");
}

exports.encodeMessage = encodeMessage;
exports.decodeMessage = decodeMessage;
