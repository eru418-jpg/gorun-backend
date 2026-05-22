const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("-----------------------------------------");
    console.log("VERİTABANI BAĞLANTISI BAŞARILI!");
    console.log("-----------------------------------------");
  } catch (err) {
    console.log("Bağlantı hatası:", err);
  }
};

module.exports = connectDB
