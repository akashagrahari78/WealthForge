// Import required modules
const express = require('express');
const cors = require('cors');  
const connectDb = require("./config/mongodb.js")
require("dotenv").config();



const app = express();
const PORT = process.env.PORT || 5000;

connectDb().catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));


// routes
app.get('/', (req, res) => {
  res.send('Server is running...');
});




app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
