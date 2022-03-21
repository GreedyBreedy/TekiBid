const { MongoClient } = require('mongodb');



const uri = "mongodb://miguelibrahim:Pagi9021@cluster0-shard-00-00.lrfwj.mongodb.net:27017,cluster0-shard-00-01.lrfwj.mongodb.net:27017,cluster0-shard-00-02.lrfwj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-sx9b0g-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function main() {
client.connect();
console.log("Connection was successful");
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var phoneNumber = document.getElementById("phone").value;
createUser(client, {
    name: name,
    email: email,
    password: password,
    phone: phoneNumber,
});
location.href = "singup_sucess.html";
}
main().catch(console.error);
async function createUser(client, newUser) {
const result = await client.db("SignUp").collection("Registration").insertOne(newUser);
console.log(`The ID: ${result.insertedId}`);
}