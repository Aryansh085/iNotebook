import React, { useState } from 'react'
import NoteContext from "./noteContext"

const NoteState = (props) =>{

    const notesInitial=  [
        {
          "_id": "65d073c1b501394f4db4df0d",
          "user": "65cf991f7ea1c8543b4e4e09",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "indi",
          "date": "2024-02-17T08:52:17.419Z",
          "__v": 0
        },
        {
          "_id": "65d073c6b501394f4db4df0f",
          "user": "65cf991f7ea1c8543b4e4e09",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "indi",
          "date": "2024-02-17T08:52:22.926Z",
          "__v": 0
        },
        {
          "_id": "65d073c8b501394f4db4df11",
          "user": "65cf991f7ea1c8543b4e4e09",
          "title": "My Title",
          "description": "Wake Up Early",
          "tag": "indi",
          "date": "2024-02-17T08:52:24.005Z",
          "__v": 0
        }
      ]
    const s1 = {
        "name":"Harry",
        "class":"5b"
    }
    const[notes,setNotes] = useState(notesInitial)
    // const update = ()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"Aryansh",
    //             "class":"16"
    //         })
    //     },1500)
    // }
    return(
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;