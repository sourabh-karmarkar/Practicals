const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to API"
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "sercretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Post Created...", authData });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock User (Make a request to login and send actual user and password by verifying from the database)
  const user = {
    id: 1,
    uesrname: "Sourabh",
    email: "sourabh@gmail.com"
  };
  jwt.sign({ user }, "sercretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({ token });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get the auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => {
  console.log("Server started on 5000");
});
