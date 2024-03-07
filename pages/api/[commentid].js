import { MongoClient } from "mongodb";

const GetComments = async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URL);
  await client.connect();
  const db = client.db();

  const { commentid } = req.query;

  if (req.method === "GET") {
    const commentsCollection = db.collection("comments");

    const comments = await commentsCollection.find();
    res.status(200).json({
      message: `Fetched comments for event with id ${commentid} `,
    });
  } else if (req.method === "POST") {
    const comments = db.collection("comments");

    const comment = req.body;
    const newComment = await comments.insertOne(comment);

    res.status(200).json({
      message: `Received the following comment for the event ${commentid}`,
      newComment: "MISS",
    });
  }
};

export default GetComments;
