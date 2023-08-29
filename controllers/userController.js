const openCollection = require("../database/databaseConnection");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");

async function createUser(req, res){
   
        const userCollection = await openCollection("users");

        const user = new User(req.body.userName, req.body.email, req.body.password);
        const existingUser = await userCollection.findOne({email:user.email});
        if(existingUser){
                return res.json('User with this email already exists');
        }
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        const result = await userCollection.insertOne(user);
}

