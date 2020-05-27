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
const cardsCollection = db.collection('Cards')
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

app.get('/cards', (req, res) => {
  cardsCollection.find({})
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