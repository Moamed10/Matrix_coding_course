const user = require('../model/data'); 

const displayPosts = (req, res) => {
    res.render('doc', { data: user }); 
};

const getPostByName = (req, res) => {
    const name = req.params.name; 
    console.log(req.body)
      const [newUser]=user.filter((item)=>{
        return item.name==req.params.name
      })
    //   console.log(newUser)
    // const filteredData = user.filter(post => post.name === name);
    res.render('Content', { use: newUser }); 
};

module.exports = {
    displayPosts,
    getPostByName
};
