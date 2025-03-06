const express=require("express");
const errorhandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();
const cors = require('cors');


connectDb();
const app= express();

const PORT=process.env.PORT||5000;
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'], 
    credentials: true 
  }));

app.use(express.json());
// app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/user",require("./routes/userRoutes"))
app.use(errorhandler);
const HOST = "0.0.0.0"; // Allows external access

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}` )
});

