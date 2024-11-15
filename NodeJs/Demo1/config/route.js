const express = require("express")
const router = express.Router()
const myfun = require("../controller/myfun")

router.get("/articles",myfun.displayarticles)
router.get("/creat-article",myfun.displaycreatarticles)
router.post("/creat-article",myfun.createArticle)

router.post("/delet-article",myfun.deletearticle)



router.post("/display-edit-article", myfun.displayeditarticle); // For loading the edit form
router.post("/edit-article/:articleId", myfun.saveEditedArticle); 
module.exports = router