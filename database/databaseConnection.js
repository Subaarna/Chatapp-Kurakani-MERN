
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chatapp:chatapp123@cluster0.yplaf6x.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function databaseInstance(){
  try{
    const client = await MongoClient.connect(uri, {useUnifiedTopology: true});
    await client.db().command({ping:1});
    console.log("Connected to MongoDB");
    return client
  }catch(error){
    console.error("Error connecting to MongoDB", error);
    throw new error;
  }
}

const clientPromise = databaseInstance();
function openCollection(collectionName){
  return clientPromise.then(client=> client.db("chatapp").collection(collectionName));
}
module.exports = openCollection;