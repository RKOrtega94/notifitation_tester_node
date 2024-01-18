const { messaging } = require("../../config/messaging");

const sendNotification = async (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .json({ message: "Notification sent successfully from service" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendNotification,
};
