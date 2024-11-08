const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes");
var cors = require("cors");
const dbConfig = require("./config/dbConfig");
dbConfig();
// http://localhost:3500/api/v1/auth/registration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const path = require("path");
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", (req, res) => {
  res.send({ error: `Route does't match` });
});
app.listen(process.env.SERVERPORT, () => {
  console.log(`server is running port number ${process.env.SERVERPORT}`);
});
