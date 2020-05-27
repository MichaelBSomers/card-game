let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  // Removes DeprecationWarning
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

// Collection List
const cardsCollection = db.collection('Cards')
const decksCollection = db.collection('Decks')

db.once('open', _ => {
  console.log('Database connected:', dbConfig.db)
})
db.on('error', err => {
  console.error('connection error:', err)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.listen(4000, function() {
  console.log('listening on 4000')
})

app.post('/cards/delete', (req, res) => {
  
  let id = new mongoose.Types.ObjectId(req.body._id)
  console.log(id)
  cardsCollection.deleteOne({_id: id})
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

app.get('/cards', (_req, res) => {
  cardsCollection.find().toArray()
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

app.post('/cards', (req, res) => {
  cardsCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
      res.send(result.ops)
    })
    .catch(error => {
      res.send(error)
    })
})

app.get('/decks', (_req, res) => {
  decksCollection.find().toArray()
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})

app.post('/decks', (req, res) => {
  decksCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
      res.send(result.ops)
    })
    .catch(error => {
      res.send(error)
    })
})