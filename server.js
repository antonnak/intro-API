const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.json("Howdy here from our API!")
})

app.post("/", (req, res, next) => {
    console.log(req.body);
    res.json("Howdy from Antonio!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})