// const express = require('express')

// const app = express();
// const port = 5000

// app.get('/',(req,res) => {
//     res.send('Halo saya lagi belajar express')
// })

// app.listen(port, function(){
//     console.log(`Kita berada di localhost ${port}`)
// })  //!Internal configuration

//! Eksternal configuration

require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req,res) => {
    let status = process.env.PORT === 5000 ? 'Production' : 'Development'
    res.send(`Halo,Anda sedang di halaman : ${status} page.`)
})

app.listen(process.env.PORT, function() {
    console.log(`Anda Berjalan Di port : ${process.env.PORT}`)

})


