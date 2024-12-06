const myfunction = require("../controller/myfun");
const singupcontroller = require("../controller/singupcontroller")
const express = require("express");
const router = express.Router();
const User = require("../model/user"); 
const userauth = require("../auth/auth")
router.post('/users',userauth.isloggedin,myfunction.newuser)
router.get('/users',userauth.isloggedin,myfunction.displayPosts)
router.get("/post/:userId", myfunction.displaysingelPosts);

router.post("/postdelet/:userId", userauth.isloggedin, myfunction.deletpostbyclick);
router.post('/post/delet/comment/:commentId/:userId',userauth.isloggedin, userauth.isloggedin, myfunction.deletcomment);
// comment routs
router.post('/post/add/new-comment/:userId',userauth.isloggedin,myfunction.addcomment)

router.post("/users-login" ,singupcontroller.login)
router.get("/users-login", userauth.enabellogin,singupcontroller.loginpage);

router.get("/users-signup", userauth.enabellogin,singupcontroller.showSignupPage);
router.post("/users-signup", singupcontroller.creatuser); 
router.get("/users-logout",singupcontroller.logout)
module.exports = router;
