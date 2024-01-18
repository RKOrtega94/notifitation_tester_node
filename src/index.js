const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = require("./router");

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
