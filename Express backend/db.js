const { MongoClient } = require("mongodb");

const url = "mongodb://192.168.31.174:27017";
const dbName = "crudApp";

const client = new MongoClient(url, {
  serverSelectionTimeoutMS: 5000,
});
let db;

async function connectDB() {
  await client.connect();
  console.log("Connected to MongoDB");
  db = client.db(dbName);
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
