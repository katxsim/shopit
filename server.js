const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

// DB CONFIG
const db = require('./config/keys').mongoURI;

// CONNECT TO MONGO
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port' + port));
