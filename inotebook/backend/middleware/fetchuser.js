var jwt = require("jsonwebtoken")
const JWT_SECRET = "Aryansh@anshu";

const fetchuser = (req,res,next)=>{
    console.log("fetchuser")
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"});
    }token
    try{
        const data =  jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    }catch(err){
        res.status(401).send({error:"Please send valid auth-token"});
    }
    
}

module.exports = fetchuser