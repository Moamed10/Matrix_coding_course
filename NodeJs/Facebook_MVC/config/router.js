const express = require("express")
const router = express.Router()
const fun = require("../controller/myfun")


router.get("/feed",fun.displayfeed)
router.post("/creat-feed", fun.creatfeed);

router.get("/feed/:id", fun.singlefeed);  
router.post("/feed/delete/:id", fun.deletfeed);  
router.get("/feed/edit/:id", fun.showedit); 
router.post("/feed/update/:id", fun.updatefeed);  // Route to update a specific feed


module.exports = router