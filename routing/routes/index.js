const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router();

//!route index dengan method GET

// router.get('/:user',(req, res, next)=> {
//     res.send(`Hello ${req.params.user}`)
// })
//!router index
router.post(
    '/', bodyParser.json(),
    bodyParser.urlencoded({extends: true}),
    (req, res, next)=> {
        res.send(req.body)
    }
)

//!router index method delete

router.delete('/:id',(req, res, next)=> {
    res.send(`Data dengan id ${req.params.id} telah dihapus`)
})

router.delete('/',(req, res, next)=> {
    res.send('Tidak dapat menghapus,because you not yet in the id')
})
module.exports = router