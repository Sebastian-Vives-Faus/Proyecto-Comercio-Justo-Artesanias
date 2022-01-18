// Libraries
const express = require("express");
const cors = require("cors");
// DB Tests
const test1 = require ('./db-tests/folkart1.json');

console.log(test1);

// Configuration
const app = express();
app.use(cors());
const authMiddleware = require("./auth-middleware");

//app.use("/", authMiddleware);
app.use("/", authMiddleware);

app.get("/folkart", (req, res) => {
    return res.send(test1);
})

app.listen(5000, () => {
    console.log("Backend server is running! PORT: 5000");
})