import React, { useContext,useState } from 'react'
import { noteContext } from './NoteState'

export default function EditNote(props) {

    const [note, setnote] = useState(props.note)
    const onChange=(e)=>{
        setnote({...note,[e.target.title]:e.target.value});
         
           };
       
  return (
    <>
    <i className="fa-solid fa-pen-to-square mx-2" title="edit" style={{cursor:"pointer"}}  data-toggle="modal" data-target="#note" ></i>
    <div className="modal fade" id="note" tabIndex="-1" aria-labelledby={`note${props.index}ModalLabel`} aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
  <h1 className="modal-title fs-5" id={`note${props.index}ModalLabel`}>Modal title</h1>
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div className="modal-body">
<div className="mb-3">
<label htmlFor="formGroupExampleInput" className="form-label">Title</label>
<input type="text" className="form-control" id="name" title="title" value= {`${props.note.title}`} onChange={handleonChange} />
</div>
<div className="mb-3">
<label htmlFor="formGroupExampleInput2" className="form-label">Description</label>
<input type="text" className="form-control" id="desc" title="description" value= {`${props.note.description}`} onChange={handleonChange} />
</div>
<div className="mb-3">
<label htmlFor="formGroupExampleInput2" className="form-label">tag</label>
<input type="text" className="form-control" id="tag" title="tag" value={`${props.note.tag}`} onChange={handleonChange} />
</div>
</div>
<div className="modal-footer">
  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" className="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>
</>
  )
}
