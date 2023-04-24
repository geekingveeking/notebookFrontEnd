import React, { useContext, useState } from "react";
import { noteContext } from "./NoteState";

export default function Card(props) {

  const context = useContext(noteContext);

  const { deleteNote, editNote } = context;
  const [note, setnote] = useState(props.note);
  const handleDelete = (e) => {
    deleteNote(props.note);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.title]: e.target.value });
  };

  const handleSubmit = async () => {
    await editNote(note);
  };
  return (
    <>
      <div className="col-md-3 my-3">
        <div className="card">
          <div className="card-body ">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{props.note.title}</h5>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                title="edit"
                style={{ cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target={`#note${props.index}Modal`}
              ></i>
              <div
                className="modal fade"
                id={`note${props.index}Modal`}
                tabIndex="-1"
                aria-labelledby={`note${props.index}ModalLabel`}
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id={`note${props.index}ModalLabel`}
                      >
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label
                          htmlFor="formGroupExampleInput"
                          className="form-label"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          title="title"
                          value={`${note.title}`}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="formGroupExampleInput2"
                          className="form-label"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="desc"
                          title="description"
                          value={`${note.description}`}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="formGroupExampleInput2"
                          className="form-label"
                        >
                          tag
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="tag"
                          title="tag"
                          value={`${note.tag}`}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={handleSubmit}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <i
                className="fa-solid fa-trash mx-2"
                style={{ cursor: "pointer" }}
                title="delete"
                onClick={handleDelete}
              ></i>
            </div>
          </div>
          <p className="card-text">{props.note.description} </p>
        </div>
      </div>
    </>
  );
}
