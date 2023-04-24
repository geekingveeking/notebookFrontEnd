import React from 'react';
import Card from './Card';
import { useContext,useEffect} from 'react';
import { noteContext } from './NoteState';
import { useNavigate } from 'react-router-dom';



export default function CardLayout() {
  
const {notes,fetchNotes}= useContext(noteContext);
const navigate=useNavigate();
   useEffect( () => {
    if(localStorage.getItem('token')){
   fetchNotes();
    }
    else {
      navigate("/login")
    }
   }, [])
   
  return (<>
<div className="my-3">
    <h3>Your Notes</h3>
    <div className="row ">
  {
    notes.map((note,index)=>{return <Card key={index} note={note} index={index}/>})
  }
    </div>
    </div>
    </>
  )
  
}
