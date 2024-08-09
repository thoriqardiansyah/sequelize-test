const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { bookRoute, authorRoute, bookauthorRoute } = require("./routes");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1/book", bookRoute);
app.use("/api/v1/author", authorRoute);
app.use("/api/v1/bookauthor", bookauthorRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
