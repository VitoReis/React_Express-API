// Express framework
const express = require('express')
const app = express()

// .env Config
require('dotenv').config()
const PORT = process.env.PORT || 3000

// Config to read requisition bodys
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DataBase
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)

// Enable cross-origin for development pourpose
var cors = require('cors');
app.use(cors());

// Routes
const routes = require('./routes')
app.use(routes)

// Server port
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
})