const express = require("express");
const router = express.Router();

const notifications = require("./notifications");

router.use("/notifications", notifications);

module.exports = router;
