const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Veritabanı bağlantısı başarılı!");
  } catch (err) {
    console.log("Bağlantı hatası:", err);
  }
};

module.exports = connectDB;
