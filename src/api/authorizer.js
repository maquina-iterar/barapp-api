const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const authorizer = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://barapp.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://api.barapp.com/",
  issuer: "https://barapp.us.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = authorizer;
