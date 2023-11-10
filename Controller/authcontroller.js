const User = require("../Models/User");
const bcrypt = require("bcrypt"); //importing bcrypt


exports.signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });//mongodb query to find the given email 
    if (user) {
      return res.status(400).json({ message: "user already existed" });
    }
    const { password } = req.body;
    const hashedpass = await bcrypt.hash(password, 10);
    const createduser = await User.create({
      ...req.body,
      password: hashedpass,
    });
    res.status(200).json({
       message: "created successfully",
       user:createduser
   });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message:"Something went wrong",
      error
    });
  }
}

  exports.login = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const currentuser = await User.findOne({ email });
      if (!currentuser)
        return res.status(400).json({ message: "invalid email" });
      const pass = await bcrypt.compare(password, currentuser.password);
      if (!pass) {
        return res.status(400).json({ message: "Invalid" });
      } else {
        res.status(200).json({ message: "success login",user:currentuser });
      }
    } catch (error) {
        console.log(error);
      res.status(500).json({
        message: "Some Thing went wrong",
        error
      });
    }
  };

  

