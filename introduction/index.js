const express = require('express');

const app = express();
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello am learn Express')
})

app.listen(port, function() {
    console.log(`Server berjalan di localhost ${port}`)
})

