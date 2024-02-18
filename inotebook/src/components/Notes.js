import {React, useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

    const context = useContext(noteContext);
    const { notes} = context;
  
  return (
    <>
    <AddNote></AddNote>
<div className="row my-3">
      <h1>Your notes</h1>{
        notes.map((note)=>{
          return (
            <NoteItem key={note._id} note={note}></NoteItem>
           
          )
        })
      }
      </div>
    </>
  )
}

export default Notes
