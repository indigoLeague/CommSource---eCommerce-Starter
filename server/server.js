const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

const server = http.createServer(
  // {
  //   key: fs.readFileSync(path.resolve(__dirname, './ssl_diane/server.key')),
  //   // // is required to allow localhost to run on HTTPS
  //   // // otherwise you either get an error or a certified invalid warning
  //   cert: fs.readFileSync(path.resolve(__dirname, './ssl_diane/server.crt')),
  // },
  app
);

server.listen(3000, () => console.log('listening on 3000'));
