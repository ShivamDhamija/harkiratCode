const jwt = require('jsonwebtoken');
const  {JWT_Secret} = require("../config")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization.split(" ")[1];
    const deCodedValue = jwt.verify(jwtToken,JWT_Secret);
    if(deCodedValue.username)
        next();
    else
        res.status(403).json({msg:"unauthorized ca"})
}

module.exports = adminMiddleware;