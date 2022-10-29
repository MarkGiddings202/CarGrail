const jwt = require("jsonwebtoken");
const Users = require("./models/userModel");
require("dotenv").config();

/**
 * Verifies authenticity of user's JWT and attaches user to request object
 * @param {object} req - The request object containing users credentials
 * @param {object} res - The response object used to send a repsonse back to the client
 * @param {object} next - The next function used to pass the req to the next middleware function
 */
const authenticate = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Token not found, please login.");
  }

  const { email } = await jwt.verify(
    token,
    process.env.AUTH_KEY,
    (err, decoded) => {
      if (err) {
        throw Error("Failed to authenticate token");
      }
      return decoded;
    }
  );

  const user = await Users.getByEmail(email);

  if (!user) {
    return res.status(404).send("No user found.");
  }
  req.id = user.id;
  console.log(user, "in auth.js");
  next();
};

module.exports = authenticate;
