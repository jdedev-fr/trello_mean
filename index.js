const express = require('express')
const mongo = require('./myMong')
const trell = require('./model/trello.model')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/user', (req, res) => {
    trell.find().then(data => {
        res.send(data).status(200)
    })
        .catch(err => {
            res.send(err).status(500)
        })

})

app.get('/api/user/:id', (req, res) => {
    trell.findById(req.params.id, (err, data) => {
        if (err) res.send(err).status(500)
        else res.send(data).status(200)
    })

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

