import mongodb from "mongodb";

const Collections = {};

const connectMongoDb = async () => {
  const client = new mongodb.MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("exam");
  Collections["USERS"] = db.collection("users");
};

export { Collections, connectMongoDb };
