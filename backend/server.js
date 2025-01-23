const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 7000;

// app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});