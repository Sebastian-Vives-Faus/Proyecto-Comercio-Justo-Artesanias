const firebase = require("firebase-admin");

const credentials = require("./comercio-justo-firebase-adminsdk-9ek8z-6ff4e7dcf0.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://comercio-justo-default-rtdb.firebaseio.com/",
});

module.exports = firebase;