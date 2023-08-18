const express = require("express");
const openCollection = require("./database/databaseConnection");
//call the express function to create the app
const app = express();

// Use the express.json() middleware to parse JSON requests
app.use(express.json());
const collectionName= "chatapp";
openCollection(collectionName)
.then (collection =>{
        // Now you have the collection object, and you can perform operations on it
    // For example, you can query the collection
    collection.findOne({}).then(result=>{
        console.log("Result from the database:", result);
    });
})
.catch(error=>{
    console.error("Error:", error);
})
app.listen(8000, ()=>{
console.log("server is running on port 8000");
});