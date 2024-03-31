const mongoose = require("mongoose");

async function connectToDB(url) {
  await mongoose
    .connect(url)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("connection err", err));
}

module.exports = {
  connectToDB,
};
