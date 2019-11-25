const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://chriswillsflannery:Fmloanng1o21920!@cluster0-bp9pd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('~~~~~ connected successfully!');
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.listen(3000, () => console.log('listening on 3000'));
