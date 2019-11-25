const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));



app.listen(3000, () => console.log('listening on 3000'));
