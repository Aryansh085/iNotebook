const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    obj={
        Loc:"Notes page"
    }
    console.log(req.body)
    res.json(obj);
})

module.exports = router
