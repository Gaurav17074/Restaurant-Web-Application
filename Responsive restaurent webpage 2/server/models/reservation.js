const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  datetime: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
