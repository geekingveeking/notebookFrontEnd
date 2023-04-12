import React,{useState,useContext} from 'react'
import { noteContext } from './NoteState';




export default function AddNote() {
  const context = useContext(noteContext);
  const {notes,addNote} =context;
const [note, setnote] = useState({title:"My Title",description:"My Description",tag:"Default"});

 const onChange=(e)=>{
setnote({...note,[e.target.title]:e.target.value})

  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(note);
    addNote(note);
    
  };
  return (
<form>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Add a Note</label>
  <input type="text" className="form-control" id="name" title="title" placeholder= "add a note" onChange={onChange} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Description</label>
  <input type="text" className="form-control" id="desc" title="description" placeholder="add description" onChange={onChange} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">tag</label>
  <input type="text" className="form-control" id="tag" title="tag" placeholder="add a tag" onChange={onChange} />
</div>

  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    
  )}