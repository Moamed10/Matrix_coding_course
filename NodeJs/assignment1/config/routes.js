const express = require("express");
const user_data = require("../model/data");
const router = express.Router();
const myfunction = require("../controller/myfun");

router.get('/users', myfunction.displayPosts);
router.post('/user/:name', myfunction.getPostByName);

module.exports = router;
