const path = require('path');
const express = require('express');
const router = express.Router();

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


module.exports = router;