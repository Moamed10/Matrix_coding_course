// const express = require("express");
// const user_data = require("../model/data");
// const router = express.Router();
const myfunction = require("../controller/myfun");

// router.post('/user/search', myfunction.getPostByName); 
// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../model/user"); 

router.post('/users',myfunction.newuser)
router.get('/users',myfunction.displayPosts)
router.get("/post/:userId", myfunction.displaysingelPosts);
module.exports = router;
