import React, { useContext } from 'react'
import { noteContext } from './NoteState'

export default function Card(props) {
  const context = useContext(noteContext);
 const {deleteNote}=context;

const handleDelete=(e)=>{
  
  deleteNote(props.note);
 }

  return (
   

    <div className= "col-md-3 my-3" >
    <div className="card" >
    <div className="card-body ">
       
            <div className="d-flex align-items-center" >
      <h5 className="card-title">{props.note.title}</h5>
      <i className="fa-solid fa-pen-to-square mx-2" style={{cursor:"pointer"}}></i>
      <i className="fa-solid fa-trash mx-2" style={{cursor:"pointer"}} title="delete" onClick={handleDelete} ></i>
      </div></div>
      <p className="card-text">{props.note.description}  </p>
     
    </div>
  </div>
  
  );
}


