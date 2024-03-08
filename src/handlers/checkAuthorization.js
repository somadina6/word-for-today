require("dotenv").config();

async function checkAuthorization(req, res, next) {
  // Get the authorization header from the request
  const authHeader = req.headers["authorization"];

  // Check if the authorization header exists and contains the correct key
  const apiKey = process.env.CUSTOM_AUTH_KEY;

  if (authHeader && authHeader === apiKey) {
    // If the authorization key is correct, proceed to the next handler
    next();
  } else {
    // If the authorization key is incorrect or missing, return a 401 Unauthorized response
    res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = checkAuthorization;
