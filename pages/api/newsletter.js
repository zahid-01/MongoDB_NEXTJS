import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGODB_URL);
const dbName = "EVENTS";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    await client.connect();
    const db = client.db(dbName);

    const subscribers = db.collection("mailList");
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);

    const emailSubscriber = await subscribers.insertOne({ email });

    res.status(200).json({
      message: `Received email ${email} for subscription`,
      emailSubscriber,
    });
  }
};

export default handler;
