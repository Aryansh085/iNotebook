const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser")
const JWT_SECRET = "Aryansh@anshu";


// route for creating a new user
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user != null) {
        res.status(400).json({ error: "Sorry, the email already exists" });
      }
      const salt = await bcrypt.genSalt(10);

      const secPass = await bcrypt.hash(req.body.password,salt);
      console.log(secPass)
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user:{
            id:user.id
        }
      }
      const token = jwt.sign(data,JWT_SECRET);
      res.status(201).json({token});
    } catch (err) {
      res.status(500).json({ error: "Some internal error occured." , error:err});
    }
  }
);

// route for login

router.post("/login",[
    body('email','enter valid email').isEmail(),
    body('password','password cannot be blank').exists()

],async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({error:"Check credentials"})
        }
        const passComp = await bcrypt.compare(password,user.password);
        if(!passComp){
            return res.status(400).json({error:"Check credentials"})
        } 
        const data = {
            user:{
                id:user.id
            }
        }
        const token =  jwt.sign(data,JWT_SECRET);
        return res.status(200).json({token})
    }catch(err){
        return res.status(500).send({error:"Some internal server error occured"})
    }
})


router.get("/getuser",fetchuser,async(req,res)=>{
    try{
        const userId = "todo";
        const user = await User.findOne({email:req.body.email}).select("-password");
        res.status(201).send({msg:"valid"})
    }catch(err){
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
