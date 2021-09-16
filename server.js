
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const config = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

// this helps log items in the console log so that you can trace back - makes it easy to see what is happening when you click buttons
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static("public"));

mongoose.connect(process.env.DB_CLIENT_URL || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

});

app.use(htmlRoutes)
app.use(apiRoutes)



app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});