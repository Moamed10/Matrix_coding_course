const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserInfo = require("../model/singup");

// Render the signup page
const showSignupPage = (req, res) => {
    res.render("signup");  // Renders the signup view
};
const loginpage = (req, res) => {
    res.render("login");  // Renders the signup view
};
// Register a new user with hashed password
const creatuser = async (req, res) => {
    try {
        // Check if the email already exists
        const existingUser = await UserInfo.findOne({ email: req.body.email });

        if (existingUser) {
            res.render('login');
        }

        // Hash the password and save the user
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userinfo = new UserInfo({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await userinfo.save();
        res.redirect("/users-login");  // Redirect to login after successful registration

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Server error" });
    }
};

// Login function with JWT token generation
const login = async (req, res) => {
    try {
        const exituser = await UserInfo.findOne({ email: req.body.email });

        if (exituser) {
            const correctpass = await bcrypt.compare(req.body.password, exituser.password);
            if (correctpass) {
                // Generate JWT token with user ID
                const UserToken = jwt.sign(
                    { userId: exituser._id },
                    process.env.JWT_SECRET || "user is jwt",
                    { expiresIn: '1h' }
                );

                // Set the token in a cookie
                res.cookie('token', UserToken, { httpOnly: true });
                res.redirect("/users");
            } else {
                console.log("Incorrect password");
                res.status(401).json({ error: "Incorrect password" });
            }
        } else {
            console.log("User not found");
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error" });
    }
};

// Logout function to clear the token cookie
const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/users-login");
};

module.exports = { 
    creatuser,
    showSignupPage,
    login,
    loginpage,
    logout
};
