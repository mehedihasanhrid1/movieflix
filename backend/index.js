const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const corsConfig = {
  origin:['http://localhost:5173', 'https://movieflixquadb.surge.sh'],
credentials:true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.use(cors(corsConfig));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lbqsrfq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    const database = client.db("MovieFlix");
    const showCollection = database.collection("Shows");
    
    app.get("/shows", async (req, res) => {
      try {

        const result = await showCollection.find({}).toArray();
        res.json(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    app.get("/shows/:id", async (req, res) => {
      const showsId = req.params.id;
      try {
        const show = await showCollection.findOne({
          _id: new ObjectId(showsId),
        });
        if (show) {
          res.json(show);
        } else {
          res.status(404).json({ error: "Show not found" });
        }
      } catch (error) {
        console.error("Error fetching show:", error);
        res.status(500).send("Internal Server Error");
      }
    });
   
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("The server is running.");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
