const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const urlEncoded = bodyParser.json();
const app = new express();

app.use(express.static(__dirname + '/dist/activity12'));

mongoose.connect('mongodb+srv://camilejoy:Iefg4a5@itsdcluster-fd3o0.mongodb.net/test?retryWrites=true&w=majority', 
{useUnifiedTopology: true, useNewUrlParser: true});

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'dist/activity12/index.html');
})

app.get('/users', (req, res) => {
    User.find({}, (err, data) => {
        if(err) throw err;
        res.json(data);
    })
})

app.get('/user/:id', (req, res) => {
    User.findOne({_id: req.params.id})
        .populate('users') 
        .exec((err, data) => {
            if(err) throw err;
            res.json(data);
    });
})

app.post('/user', urlEncoded, (req, res) => {
    var user = new User({
        name: req.body.name,
        age: req.body.age
    });
    user.save((err) => {
        if(err) res.json({msg: "Invalid Request!"});
        res.json({msg: "Record Saved!"});
    })
})

app.put('/user/:id', urlEncoded, (req, res) => {
    User.updateOne({_id: req.params.id}, {
        name: req.body.name,
        age: req.body.age
    }, (err) => {
        if(err) res.json({msg: 'Invalid Request!'});
        res.json({msg: 'Record Updated!'});
    });
})

app.delete('/user/:id', (req, res) => {
    User.deleteOne({_id: req.params.id}, (err, data) =>{
        if(err) res.json({msg: "Invalid Request!"})
        res.json({msg:"Record Deleted!"})
    })
})

const PORT = process.env.PORT || 90;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
});