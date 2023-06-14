const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("../backend/routes/booksRoute");

require("./connection/connection");
app.use(cors());
app.use(express.json());
app.use("/api", bookRoute);

app.listen(1000, () => {
  console.log("Server Started Successfully");
});
