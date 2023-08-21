
async function createUser(req, res) {
    try {
      const userCollection = await openCollection("users");
  
      // Create a new User object from the request body
      const user = new User(req.body.userName, req.body.email, req.body.password);
  
      // Check if the email already exists
      const existingUser = await userCollection.findOne({ email: user.email });
      if (existingUser) {
        return res
          .status(409)
          .json({ error: "User with this email already exists" });
      }
  