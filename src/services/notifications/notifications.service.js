const { admin } = require("../../config");

const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24,
};

const sendNotification = async (req, res) => {
  try {
    console.log(req.body);

    const registrationToken = req.body.registrationToken;
    const message = {
      data: {
        key1: "value1",
        key2: "value2",
      },
      notification: {
        title: "Título de la notificación",
        body: "Cuerpo de la notificación",
      },
    };
    const options = notification_options;

    admin
      .messaging()
      .sendToDevice(registrationToken, message, options)
      .then((response) => {
        console.log("Successfully sent message:", response);
        res.status(200).json({ message: "Successfully sent message" });
      })
      .catch((error) => {
        console.log("Error sending message:", error);
        res.status(500).json({ message: error.message });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendNotification,
};
