const express = require('express');

const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')))

// app.get('/build/main.js', (req,res)=>res.status(200).sendFile(path.resolve(__dirname, '../build/main.js')))

app.listen(3000, () => console.log('listening on 3000'));
