const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://julien:julien@cluster0.qfvz7.mongodb.net/Trello_mean?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => { console.log("Mongo Atlas connecté") },
        err => { console.error("Il y a un pb :" + err) }
    );

module.exports = mongoose;