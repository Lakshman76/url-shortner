const express = require("express");
const { connectToDB } = require("./config/connection");
const URL = require("./models/url");
const cors = require("cors");
const urlRoute = require("./routers/url");
const userRoute = require("./routers/user");

const app = express();
const PORT = 5000;

connectToDB("mongodb://127.0.0.1:27017/short-url");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectURL);
});

// testing purpose

app.get("/api/test", async (req, res) => {
  const allURL = await URL.find({});
  res.send(allURL);
});

// Routers
app.use("/url", urlRoute);
app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
