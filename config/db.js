const mongoose = require('mongoose');

const db = process.env.MONGO_URI; // Get URI from environment variable

const connectDB = async () => {
  try {
    if (!db) {
      throw new Error(
        'MongoDB connection string is not defined in environment variables'
      );
    }

    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;
