require("dotenv").config();
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const routeIndex = require('./routes/index')
const routeTest = require('./routes/test')

//!disini untuk routing

app.use('/', routeIndex)
app.use('/', routeTest)

app.use(
    bodyParser.json(),
    (req,res,next) => {
        res.header('content-type', 'application/json');
        next()
    },
    routeIndex,
    routeTest
)

app.listen(process.env.PORT, ()=> {
    console.log(`Server berjalan di port ${process.env.PORT}`) //buat manggil port
})