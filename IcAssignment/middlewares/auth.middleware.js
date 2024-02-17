const { token } = require("../utils/token.js");

const authAuthor = async (req, res, next) => {
  const auhtToken = token;

  if (!auhtToken) res.send("author not authorized");
  else {
    req.author = auhtToken;
    next();
  }
};

module.exports = authAuthor;
