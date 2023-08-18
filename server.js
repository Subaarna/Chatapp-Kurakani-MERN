const express = require("express");
//call the express function to create the app
const app = express();

// Use the express.json() middleware to parse JSON requests
app.use(express.json());

app.listen(8000, ()=>{
console.log("server is running on port 8000");
});