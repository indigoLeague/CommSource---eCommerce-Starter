const mongoose = require('mongoose');
// require('dotenv').config();

const { Schema } = mongoose;
mongoose.connect(`mongodb+srv://chriswillsflannery:${process.env.DATABASE_PASSWORD}@cluster0-bp9pd.mongodb.net/ecommerce-starter?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('~~~~~ connected item model successfully!');
});

const itemSchema = new Schema({
  // / update schema
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  sold: { type: Boolean, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
