// Import required modules
const express = require('express');
const cors = require('cors');  
const connectDb = require("./config/mongodb.js")
require("dotenv").config();


const userRouter = require("./routes/userRoute.js");


const app = express();
const PORT = process.env.PORT || 3000;

connectDb().catch(err => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});
app.get('/',(req,res)=>{
  console.log("here server is running")
  res.send("server is running here")
})

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "https://wealth-forge-three.vercel.app" , 
  credentials: true
}));


//ROUTES
app.use("/api/user", userRouter)  // for login , signup , contact page, 

 
// app.get('/', (req, res) => {
//   res.send('Server is running...');
// });


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
