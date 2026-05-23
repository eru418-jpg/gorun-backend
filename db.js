const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB bağlantısı başarılı!");
  } catch (err) {
    console.error("Veritabanı bağlantısı başarısız:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
