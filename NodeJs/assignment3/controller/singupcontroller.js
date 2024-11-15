const bcrypt = require('bcrypt');
const UserInfo = require("../model/singup");
const jwt = require("jsonwebtoken")



const showSignupPage = (req, res) => {
    res.render("signup");  // Renders the signup view
};


const creatuser = async (req, res) => {
    try {
        const existingUser = await UserInfo.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const userinfo = new UserInfo({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await userinfo.save();

        res.redirect("/users"); 

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Server error" });
    }
};

const login =async(req,res) =>{
    const exituser = await UserInfo.findOne({email : req.body.email})
    if (exituser){
        let correctpass = await bcrypt.compareSync(req.body.password,exituser.password)
        if(correctpass){
            let UserToken = await jwt.sign({user : exituser},"user is  jwt")
            res.cookie('token',UserToken)
            res.redirect("/users")
        }else{
            console.log("wrong pass")
        }
    }
}


const logout = (req,res) =>{
    res.clearCookie("token");
    res.redirect("/users")

}
module.exports = { 
    creatuser,
    showSignupPage,
    login,
    logout

 };
