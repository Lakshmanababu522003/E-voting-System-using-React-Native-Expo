const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/voting';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected to MongoDB');

    // If you need to do any further operations, you can use the client object here

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to connect
connectToMongoDB();
