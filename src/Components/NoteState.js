import { createContext, useState } from "react";

import React from "react";

export const noteContext = createContext();

export default function NoteState(props) {
  let fetchedNotes = [
    {
      _id: "641488b402590rtghe811415dj87051cd3a",
      user: "64005374884ef902cd16b289",
      title: "toDo2",
      description: "need to visit hospital",
      tag: "general",
      date: "2023-03-17T15:35:16.628Z",
      __v: 0,
    },
    {
      _id: "641580ecfhdh0a6777gsgsgsgsg984feee1e7",
      user: "64005374884ef902cd16b289",
      title: "fun time",
      description: "part at 5",
      tag: "entertainment",
      date: "2023-03-18T09:14:20.550Z",
      __v: 0,
    },
    {
      _id: "641488b402dhdh590ehjhshsh887051cd3a",
      user: "64005374884ef902cd16b289",
      title: "toDo2",
      description: "need to visit hospital",
      tag: "general",
      date: "2023-03-17T15:35:16.628Z",
      __v: 0,
    },
    {
      _id: "641580ec0dhda67tstuw77984feee1e7",
      user: "64005374884ef902cd16b289",
      title: "fun time",
      description: "part at 5",
      tag: "entertainment",
      date: "2023-03-18T09:14:20.550Z",
      __v: 0,
    },
    {
      _id: "641488b402dhdh590ststse887051cd3a",
      user: "64005374884ef902cd16b289",
      title: "toDo2",
      description: "need to visit hospital",
      tag: "general",
      date: "2023-03-17T15:35:16.628Z",
      __v: 0,
    },
    {
      _id: "641580ec0a6dhdh777cstsysw984feee1e7",
      user: "64005374884ef902cd16b289",
      title: "fun time",
      description: "part at 5",
      tag: "entertainment",
      date: "2023-03-18T09:14:20.550Z",
      __v: 0,
    },
    {
      _id: "6414890e8870qw56w6651cd3a",
      user: "64005374884ef902gjnccd16b289",
      title: "toDo2",
      description: "need to visit hospital",
      tag: "general",
      date: "2023-03-17T15:35:16.628Z",
      __v: 0,
    },
    {
      _id: "64186777984feee1haadafshswe7",
      user: "64005374884ef902cd16b289",
      title: "fun time",
      description: "part at 5",
      tag: "entertainment",
      date: "2023-03-18T09:14:20.550Z",
      __v: 0,
    },
    {
      _id: "6414884025900707e887wwtwt051cd3a",
      user: "64005374884ef902cd16b289",
      title: "toDo2",
      description: "need to visit hospital",
      tag: "general",
      date: "2023-03-17T15:35:16.628Z",
      __v: 0,
    },
    {
      _id: "641580ec0a6777984ftwtwsfttee1e7",
      user: "64005374884ef902cd16b289",
      title: "fun time",
      description: "part at 5",
      tag: "entertainment",
      date: "2023-03-18T09:14:20.550Z",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(fetchedNotes);
  const fetchNotes = () => {};

  function addNote(note) {
    const random = Math.random() * 1000;
    const tempnote = {
      _id: `641580ec0a6777984f${random}twtwsfttee1e7`,
      user: "64005374884ef902cd16b289",
      title: note.title,
      description: note.description,
      tag: note.tag,
      date: "2023-03-18T09:14:20.550Z",
      __v: 0,
    };
   fetchedNotes.concat(tempnote);
    setnotes(notes.concat(tempnote));
    console.log(fetchedNotes);
  }

  const deleteNote = (note) => {
    console.log(note._id);
    setnotes(
      notes.filter((Note) => {
        return Note._id !== note._id;
      })
    );
  };
  const editNote = () => {};

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
}
