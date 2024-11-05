// const express = require("express");
// const user_data = require("../model/data");
// const router = express.Router();
const myfunction = require("../controller/myfun");

// router.post('/user/search', myfunction.getPostByName); 
// module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../model/user"); 

router.post("/users", async (req, res) => {
    const newUser = new User(); 
    const name = req.body.name;
    const message = req.body.message;

    newUser.name = name;
    newUser.message = message;
    newUser.createdAt = new Date(); 
    await newUser.save();
    res.send(newUser); 
    
});
router.get('/users',myfunction.displayPosts)
module.exports = router;
