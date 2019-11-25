const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chriswillsflannery:Fmloanng1o21920!@cluster0-bp9pd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('~~~~~ connected successfully!');
});
