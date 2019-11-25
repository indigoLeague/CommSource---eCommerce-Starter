const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb+srv://chriswillsflannery:Fmloanng1o21920!@cluster0-bp9pd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('~~~~~ connected user model successfully!');
});

const userSchema = new Schema({
  // / update schema
});

const User = mongoose.model('User', userSchema);

module.exports = User;
