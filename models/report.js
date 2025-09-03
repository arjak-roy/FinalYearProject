const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error(`❌ MongoDB connection error: ${process.env.MONGODB_URI}`, err));

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    disease: {
      type: String,
    },
    Gender:{
      typr: String
    },
    DoctorName: {
      type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Report", reportSchema);
