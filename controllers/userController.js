const openCollection = require("../database/databaseConnection");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const { userLogin } = require("../models/usermodels");
const { GenerateAccessToken } = require("../helpers/authHelper");
const { GenerateRefreshToken } = require("../helpers/authHelper");
const { ObjectId } = require("mongodb");

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

async function login(req, res){
        try{
                const userCollection = await openCollection("users");
                const user= new userLogin(req.body.email, req.body.password);

                const existingUser = await userCollection.findOne({email:user.email});
                if(existingUser){
                        return res.json({message: "User with this email already exists!"});

                }
                const isPasswordValid = await bcrypt.compare(
                        user.password,
                        existingUser.password
                );
        if(!isPasswordValid){
                return res.json({message: "Incorrect password!"});
        }
        const accessToken = GenerateAccessToken(existingUser._id.toHexString());
        const refreshToken = GenerateRefreshToken(existingUser._id.toHexString);

        return res.json({
                message: "User logged in successfully",
                Id: existingUser._id,
                email: existingUser.email,
                accessToken: accessToken,
                refreshToken: refreshToken,
        });
        
        }catch(error){
                console.error("Error during login:", error);
                return res.json({error: "Internal server error"});
        }
}

async function deleteUser(req, res){
        const userCollection = await openCollection("users");
        const {userId}= req.body;

        const result = await userCollection.fondOneAndDelete({_id: new ObjectId(userId)
        });
}