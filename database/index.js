import mongodb from "mongodb";

const Collections = {};

const connectMongoDb = async () => {
  const client = new mongodb.MongoClient(
    "mongodb+srv://admin:anhpchy117@cluster0.z622hiu.mongodb.net/?retryWrites=true&w=majority"
  );
  await client.connect();
  const db = client.db("exam");
  Collections["USERS"] = db.collection("users");
};

export { Collections, connectMongoDb };
