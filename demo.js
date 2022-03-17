const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb://miguelibrahim:Pagi9021@cluster0-shard-00-00.lrfwj.mongodb.net:27017,cluster0-shard-00-01.lrfwj.mongodb.net:27017,cluster0-shard-00-02.lrfwj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-sx9b0g-shard-0&authSource=admin&retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    client.connect();
    console.log("Connection was successful")
    listDatabases(client);
    createUser(client, {
        email: "hanan2002@gmail.com",
        password: "Migo9021@",
    });
}
main().catch(console.error);
async function createUser(client, newUser) {
    const result = await client.db("SignUp").collection("Registration").insertOne(newUser);
    console.log(`The ID: ${result.insertedId}`);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`~ ${db.name}`);
    });
}