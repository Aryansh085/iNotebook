import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const initialState = {
    title: "",
    description: "",
    tag: "default",
  };
  const [note, setNotes] = useState({ initialState });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNotes({
      title: "",
      description: "",
      tag: "",
    })
  };

  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value = {note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
              required
            />
         
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value = {note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value = {note.tag}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button

            // disabled ={note.title.length < 5 || note.description}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
