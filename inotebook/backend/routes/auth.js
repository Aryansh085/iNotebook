const express = require("express")

const router = express.Router()


router.get("/",(req,res)=>{
    obj={
        Loc:"Auth page"
    }
    res.json(obj);
})


module.exports = router