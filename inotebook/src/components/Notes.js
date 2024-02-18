import {React, useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(noteContext);
    const { notes, setNotes } = context;
  
  return (
    <>

<div className="row my-3">
      <h1>Your notes</h1>{
        notes.map((note)=>{
          return (
            <NoteItem  note={note}></NoteItem>
            // <div className="container my-3 mx-3">
            //   notes.title;
            //   </div>
          )
        })
      }
      </div>
    </>
  )
}

export default Notes
