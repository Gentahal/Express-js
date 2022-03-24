const users = [
    {
        id: 1,
        name: 'Genta',
        kelas: 'XI RPL 1'
    },
    {
        id: 2,
        name: 'Halilintar',
        kelas: 'XI RPL 2'
        
    },
    {
        id: 3,
        name: 'Budi',
        kelas: 'XI RPL 3'
    },
]



const express = require('express')
const bodyParser = require('body-parser')

const router = express.Router();

//route index dengan method GET

router.get('/:user',(req, res, next)=> {
    res.send({user})
})

//!get user by id

router.get('/user/:id', (req, res, next) =>{
    const id = req.params.id

    //ini akan mencari data yang sesuai dengan idnya
    // skenarionya dia akan mengulang idnya dan akan mngirim data jika ada yang sesuai
    for(let i = 0; 1 < users.length; i++){
        let user = users[i]
        if(user.id === parseInt (id)){
            res.send(user)
            return next(router)
        }
    }
    //jika idnya gaada
    res.send({
        erorr:'404 user not found'
    })
})
//!router index
// router.post(
//     '/', bodyParser.json(),
//     bodyParser.urlencoded({extends: true}),
//     (req, res, next)=> {
//         res.send(req.body)
//     }
// )

module.exports = router