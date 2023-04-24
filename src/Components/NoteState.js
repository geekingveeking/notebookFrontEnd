import { createContext, useState } from "react";

import React from "react";

export const noteContext = createContext();

export default function NoteState(props) {
  const baseUrl = "http://localhost:5000";

  const [notes, setnotes] = useState([]);

  const fetchNotes = async () => {
    // Default options are marked with *
    const response = await fetch(`${baseUrl}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "auth-token":localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await response.json();
    setnotes(data);
  };

  async function addNote(title, description, tag) {
          const response = await fetch(`${baseUrl}/api/notes/createnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
            localStorage.getItem('token'),
        },
      body:JSON.stringify({title,description,tag}),
    });

    const data = await response.json();
    console.log(data);
    await fetchNotes();
  }

  const deleteNote = async (note) => {
     const response = await fetch(
      `${baseUrl}/api/notes/deletenotes/${note._id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "auth-token":
            localStorage.getItem('token'),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    await fetchNotes();
  };
  const  editNote =async (note) => {
    const{title,description,tag,_id}=note;
    const response = await fetch(`${baseUrl}/api/notes/updatenotes/${_id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
        },
      body:JSON.stringify({title,description,tag}),
    });

    const data = await response.json();
    console.log(data);
    await fetchNotes();
  }

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, fetchNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
}
