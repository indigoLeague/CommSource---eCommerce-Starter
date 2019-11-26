const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect(`mongodb+srv://chriswillsflannery:${process.env.DATABSE_PASSWORD}@cluster0-bp9pd.mongodb.net/ecommerce-starter?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('~~~~~ connected user model successfully!');
});

const userSchema = new Schema({
  // / update schema
  name: { type: String, required: true },
  password: { type: String, required: true },
  cartSession: { type: Object, required: true },
  loginSession: { type: Object, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
