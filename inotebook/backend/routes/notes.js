const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const Note = require("../models/Note");
// 
// route to fetch all the notes of the person who logged in
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ errors: err });
  }
});

// route to add a new note of the person who logged in
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Title must be 3 chars").isLength({ min: 3 }),
    body("description", "Description must be 5 chars").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }
      const { title, description, tag } = req.body;
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      // const notes = await Notes.find({user:req.user.id})
      res.json(savedNote);
    } catch (err) {
      res.status(500).json({ errors: err });
    }
  }
);


// update a note
router.put("/updatenote/:id",fetchuser, async(req,res)=>{
    try{
    const{title, description,tag} = req.body;
    const newNote = {};
    if(title){
        newNote.title = title;
    }
    if(description){
        newNote.description = description;
    }
    if(tag){
        newNote.tag = tag;
    }
    let note = await Note.findById(req.params.id)
    if(!note){
        return res.status(404).send("Not Found")
    }
    if(note.user.toString() !==req.user.id) {
        return res.status(401).send("Not Allowed ")
    }
    note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
    res.json({note});
} catch(err){

}
})

//delete a note

router.delete("/deletenote/:id", fetchuser,async(req,res)=>{
    try{
        const{title, description, tag} = req.body;

        let note = await Note.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not found");
    } 
    if(note.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    return res.json({"success":"Note has been deleted",note:note})
}
    catch(err){
        return res.status(500).send(err);
    }
    
})
module.exports = router;
