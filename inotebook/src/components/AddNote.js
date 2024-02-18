import React, { useContext, useState} from "react";
import noteContext from "../context/notes/noteContext"
const AddNote = () => {

    const context = useContext(noteContext);
    const {addNote} = context;

    const initialState ={
        "title":"",
        "description":"",
        "tag":""
    }
    const [note,setNotes] = useState({initialState})
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    const onChange = (e)=>{
        setNotes({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label" >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
