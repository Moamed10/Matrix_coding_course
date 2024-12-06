const myfunction = require("../controller/myfun");
const express = require("express");
const router = express.Router();
const User = require("../model/user"); 
router.post('/users',myfunction.newuser)
router.get('/users',myfunction.displayPosts)
router.get("/post/:userId", myfunction.displaysingelPosts);

router.post("/postdelet/:userId",myfunction.deletpostbyclick)

// comment routs
router.post('/post/add/new-comment/:userId',myfunction.addcomment)
module.exports = router;
