const { getMessaging } = require("firebase/messaging");

const { app } = require("./firebase-config");

const messaging = getMessaging(app);

module.exports = { messaging };
