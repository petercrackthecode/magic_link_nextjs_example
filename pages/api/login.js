export default handler = async (req, res) => {
  if (req.method !== `POST`) return res.status(405).end(`Method not allowed`);

  // exchange the DID from Magic for some user data
  // TODO

  // Author a couple of cookies to persist a users session
  // TODO

  res.end();
}