const express = require('express')

const cors = require('cors');

let users = require('./router/users.router')

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/user', users);
/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})*/
app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

