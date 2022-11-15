const express=require("express");
const axios = require('axios');
const app= express();
const port = 5000;
const apiKey = "AIzaSyC7sWeL1tIQ4ttR05-GiDKAL_OViIpN5M4";
const baseApiUrl = "https://www.googleapis.com/youtube/v3";

const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const cors=require('cors');
const logger = require('morgan')

app.use(logger('dev'))

app.use(cors());


app.use(bodyParser.json());
app.use('/api',apiRoutes);



app.listen(port ,()=>{
    console.log("server is running on port 5000");
});

module.exports = app;
