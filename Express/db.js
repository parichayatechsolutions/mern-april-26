const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
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
