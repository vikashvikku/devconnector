const mongoose = require('mongoose');

const connectDB = async () => {
  const db = process.env.MONGO_URI;
  try {
    if (!db) throw new Error('MongoDB URI is not defined in environment variables');

    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
