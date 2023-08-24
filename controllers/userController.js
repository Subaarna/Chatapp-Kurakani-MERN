const openCollection = require("../database/databaseConnection");
const User = require("../models/userModels");

async function createUser(req, res){
   
        const userCollection = await openCollection("users");

        const user = new User(req.body.userName, req.body.email, req.body.password);;
    
}

