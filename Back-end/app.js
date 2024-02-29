// apelle des services
const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const mongoose = require('mongoose');
require('dotenv').config()

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

const MONGO_ACESS= process.env.MONGO_DB
// connection a la base de données mongoDB
async function connectDatabase() {
      try {
          await mongoose.connect( MONGO_ACESS, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
          });
          console.log('Connexion à MongoDB réussie !');
      } catch (error) {
          console.error('Erreur de connexion à la base de données :', error);
      }
  }
connectDatabase();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname,'images')));

module.exports = app;