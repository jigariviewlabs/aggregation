const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/connectdb.js');
const userRoutes = require('./routes/userroutes.js');
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//cors policy
app.use(cors());
//Database connection 
connectDB(DATABASE_URL);
//json
app.use(express.json());

// load Routes
// app.use("/api/user", userRoutes);
app.use(userRoutes);
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
