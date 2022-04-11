const express = require('express');
const router = require('.');
const app = express();

var router = express.Router();

const port = 3000;

app.get('/json',(req,res) => res.json([
    'genta',
    'jago',
    'banget gila'
]));

router.use(function (req, res, next) {
    console.log('Time', Date.now());
    next();
});

router.get('middleware', (req,res, next)=> {
    res.send('Ini midllewar');
    next();
})


app.listen(port,() =>
    console.log(`Hello ${port}`)
);

module.exports = router;