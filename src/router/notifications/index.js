const express = require("express");
const router = express.Router();

const { notificationController } = require("../../controllers/index");

// send notification
router.post("/send", (req, res) => {
  res.json({ message: "Send notification" });
});

module.exports = router;
