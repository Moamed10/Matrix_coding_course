// const user = require('../model/data');
const { name } = require("ejs");
const { param } = require("../config/routes");
const User = require("../model/user");

const newuser = async (req, res) => {
  const newUser = new User();
  const name = req.body.name;
  const message = req.body.message;

  newUser.name = name;
  newUser.message = message;
  newUser.createdAt = new Date();
  await newUser.save();
  res.send("created sucessfully");
};

const displayPosts = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch posts",
        error: error.message,
      });
  }
};

const displaysingelPosts = async (req, res) => {
  const id = req.param.id;
  const users = User.findById(id);
  res.render("post", { data: users });
};

module.exports = { displayPosts, displaysingelPosts };
