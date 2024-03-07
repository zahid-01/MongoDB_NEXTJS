const GetComments = (req, res) => {
  const { commentid } = req.query;
  if (req.method === "GET") {
    res.status(200).json({
      message: `Fetched comments for event with id ${commentid} `,
    });
  } else if (req.method === "POST") {
    const comment = req.body;

    res.status(200).json({
      message: `Received the following comment for the event ${commentid}`,
      comment,
    });
  }
};

export default GetComments;
