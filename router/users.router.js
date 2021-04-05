const express = require('express')

//const mongo = require('../myMong')
const trell = require('../model/trello.model')
const { v4: uuidv4 } = require('uuid');

let router = express.Router()

router.get('/', (req, res) => {
    trell.find().then(data => {
        res.send(data).status(200)
    })
        .catch(err => {
            res.send(err).status(500)
        })

})

router.post('/', (req, res) => {
    let newUser = trell({
        name: req.body.nom,
        pass: req.body.mdp,
        mail: req.body.email,
        key: uuidv4(),
        tasks: []
    })
    newUser.save().then(() => {
        res.send(newUser).status(200)
    }).catch(err => res.send(err).status(500))
})
router.post('/connect', (req, res) => {
    trell.find().then((data) => {
        let trouve = false
        for (let ligne of data) {
            if (ligne.name === req.body.nom && ligne.pass === req.body.mdp) {
                trouve = true
                res.send(ligne).status(200)
            }
        }
        if (!trouve) res.send({ mess: "erreur d'identification" }).status(401)

    }).catch(err => res.send(err).status(500))
})

router.put('/:id', (req, res) => {
    trell.findById(req.params.id).then(data => {
        data.name = req.body.nom
        data.pass = req.body.mdp
        data.mail = req.body.email
        data.save().then(() => {
            res.send(data).status(200)
        }).catch(err => res.send(err).status(500))
    }).catch(err => res.send(err).status(500))
})

router.delete('/:id', (req, res) => {
    trell.findById(req.params.id).then(data => {
        data.delete().then(() => {
            res.send(JSON.stringify({ mess: "Utilisateur supprimé" })).status(200)
        }).catch(err => res.send(err).status(500))
    }).catch(err => res.send(err).status(500))
})

router.get('/:id', (req, res) => {
    trell.findById(req.params.id).then(data => {
        res.send(data).status(200)
    }).catch(err => res.send(err).status(500))
})

router.post('/:id/tache', (req, res) => {
    trell.findById(req.params.id).then(data => {
        data.tasks.push({ title: req.body.titre, content: req.body.contenu, state: req.body.etat })
        data.save().then(() => {
            res.send(data).status(200)
        }).catch(err => res.send(err).status(500))
    }).catch(err => res.send(err).status(500))
})
router.put('/:id/tache/:num', (req, res) => {
    trell.findById(req.params.id).then(data => {
        data.tasks[req.params.num].title = req.body.titre
        data.tasks[req.params.num].content = req.body.contenu
        data.tasks[req.params.num].state = req.body.etat
        data.save().then(() => {
            res.send(data).status(200)
        }).catch(err => res.send(err).status(500))
    }).catch(err => res.send(err).status(500))
})
router.delete('/:id/tache/:num', (req, res) => {
    trell.findById(req.params.id).then(data => {
        data.tasks.splice(req.params.num, 1)
        data.save().then(() => {
            res.send(data).status(200)
        }).catch(err => res.send(err).status(500))
    }).catch(err => res.send(err).status(500))
})

module.exports = router;