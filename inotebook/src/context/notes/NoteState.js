import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const s1 = {
    name: "Harry",
    class: "5b",
  };
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  // Add a note
  const getNotes = async () => {
    let url = `${host}/api/notes/fetchallnotes/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjk5MWY3ZWExYzg1NDNiNGU0ZTA5In0sImlhdCI6MTcwODI2NTYwOX0.HDsycyZ6aA6T2fG0PcQSM49ddR0Bg5mzr_VmfE-KuJ8",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    let url = `${host}/api/notes/addnote/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjk5MWY3ZWExYzg1NDNiNGU0ZTA5In0sImlhdCI6MTcwODI2NTYwOX0.HDsycyZ6aA6T2fG0PcQSM49ddR0Bg5mzr_VmfE-KuJ8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json()
    
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    let url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjk5MWY3ZWExYzg1NDNiNGU0ZTA5In0sImlhdCI6MTcwODI3ODIzM30.5KAxNBY6OF0qyT47KOnL6SDCeZV2j0J3vxb7LhcCSgE",
      },
    });

    const json = await response.json()
    const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
  
    setNotes(newNotes);

    
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call

    let url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjk5MWY3ZWExYzg1NDNiNGU0ZTA5In0sImlhdCI6MTcwODI2NTYwOX0.HDsycyZ6aA6T2fG0PcQSM49ddR0Bg5mzr_VmfE-KuJ8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    for(let index = 0;index<notes.length;index++){
      const element = notes[index]
      if(element._id === id){
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break;
      }
    }
    setNotes(newNotes)
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
