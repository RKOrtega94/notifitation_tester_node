const { notifications } = require("../../services/index");

const sendNotification = async (req, res) =>
  notifications.sendNotification(req, res);

module.exports = {
  sendNotification,
};
