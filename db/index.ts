import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URI;
const DB_NAME = process.env.DB_NAME;

if (!uri || !DB_NAME) {
  throw new Error(
    "Environment variables MONGO_DB_URI and DB_NAME are required but missing."
  );
}

console.log("Database connection info:", {
  uri: uri ? "URI is set" : "URI is missing",
  dbName: DB_NAME ? "DB_NAME is set" : "DB_NAME is missing",
  nodeEnv: process.env.NODE_ENV
});

let options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // in dev mode user global variable
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
    console.log("Created new MongoDB client in development mode");
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log("Created new MongoDB client in production mode");
}

// Add connection error handling
clientPromise.catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
});

// Initialize database and collections after connection is established
let db: any;
let userCollection: any;

clientPromise.then((client) => {
  db = client.db(DB_NAME);
  userCollection = db.collection("users");
  console.log("Database and collections initialized");
}).catch((error) => {
  console.error("Failed to initialize database:", error);
});

export { db, userCollection };
export default clientPromise;
