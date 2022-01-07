// Libraries
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();
app.use(cors());
const authMiddleware = require("./auth-middleware");

app.use("/", authMiddleware);


app.listen(5000, () => {
    console.log("Backend server is running! PORT: 5000");
})