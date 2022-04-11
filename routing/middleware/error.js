const { json } = require('express');
const express = require('express')
const router = express.Router();
const app = express();
const port = 3000;

app.get('/inierror', (req,res) =>{
    iniError
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).json({
        status: 'failed',
        errors: err.message,
    })
})

app.listen(port, () =>
console.log(`Not Found${port}`)
);