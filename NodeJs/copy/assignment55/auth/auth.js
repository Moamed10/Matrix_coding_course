const jwt = require("jsonwebtoken");

const isloggedin = (req, res, next) => {
    if (req.cookies.token) {
        try {
            const decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET || "user is jwt");
            req.userId = decodedToken.userId;  // Attach the userId from the token to req
            next();  // Proceed to the next handler
        } catch (error) {
            console.error("Invalid token:", error);
            res.redirect("users-login");  // Redirect to login if token is invalid
        }
    } else {
        res.redirect("users-login");  // Redirect to login if no token is found
    }
};




const enabellogin = (req,res,next)=>{

    if(req.cookies.token){
        res.redirect("/users")
    }else{
        next()
    }
}


module.exports = {
    isloggedin,
    enabellogin,

}