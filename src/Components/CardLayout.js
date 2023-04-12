import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { noteContext } from './NoteState';



export default function CardLayout() {
  
const {notes}= useContext(noteContext);
//const notes=context.notes;

//const [notes,updateNotes]=useContext(noteContext);

   
  return (
<div className="my-3">
    <h3>Your Notes</h3>
    <div className="row ">
  {
    notes.map((note)=>{return <Card key={note._id.toString()} note={note}/>})
  }
    </div>
    </div>
  )
}
