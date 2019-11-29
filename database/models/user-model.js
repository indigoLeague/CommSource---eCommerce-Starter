// import { compareSync, hashSync } from 'bcryptjs';

const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect(`mongodb+srv://chriswillsflannery:${process.env.DATABSE_PASSWORD}@cluster0-bp9pd.mongodb.net/ecommerce-starter?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb+srv://edwin:pass@cluster0-plrrd.mongodb.net/ecomm?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

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
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     validate: {
//       validator: (name) => User.doesNotExist({ name }),
//       message: 'Username already exists'
//     }
//   },
//   password: {
//     type: String,
//     required: true
//   }
// }, { timestamps: true });

// UserSchema.pre('save', function () {
//   if (this.isModified('password')) {
//     this.password = hashSync(this.password, 10);
//   }
// });
// UserSchema.statics.doesNotExist = async function (field) {
//   return await this.where(field).countDocuments() === 0;
// };
// UserSchema.methods.comparePasswords = function (password) {
//   return compareSync(password, this.password);
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
