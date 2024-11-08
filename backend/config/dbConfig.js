const { default: mongoose } = require("mongoose");

function dbConfig() {
  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConfig;
