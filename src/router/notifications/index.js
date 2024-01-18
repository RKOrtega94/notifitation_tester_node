const express = require("express");
const router = express.Router();

const { notificationController } = require("../../controllers/index");

router.post("/send", (req, res) =>
  notificationController.sendNotification(req, res)
);

module.exports = router;
