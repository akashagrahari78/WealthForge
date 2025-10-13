// Import required modules
const express = require('express');
const cors = require('cors');  
const dotenv = require('dotenv');  

const app = express();

 dotenv.config();

// Middleware
app.use(express.json());  
app.use(cors());  



// routes
app.get('/', (req, res) => {
  res.send('Server is running...');
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
