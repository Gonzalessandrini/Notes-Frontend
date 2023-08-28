import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext"; // Ajusta la ruta según tu estructura
import { useNotes } from "../hooks/useNotes"; // Ajusta la ruta según tu estructura

function ListOfNotes({ notes, deleteNote }) {



  return (
    <>
      <table className="table table-striped table-light" style={{ border: "1px " }}>
        <thead>
          <tr>
            <th>Content</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.content}</td>
              <td> {note.date} </td>
              <td>
                <Link to={`/notes/${note.id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>
              </td>
              <td>
                <button onClick={() => deleteNote(note.id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function EmptyNotes() {
  return <p>No se encontraron notas</p>;
}

export function Notes() {
  const { getNotes,deleteNote,notes } = useNotes(); // Supongo que useNotes proporciona las notas y la función deleteNote

  useEffect(()=>{
    getNotes()
  },[notes])

  const hasNotes = notes?.length > 0;

  return (
    <div>
      {
        hasNotes ? (
          <ListOfNotes deleteNote={deleteNote} notes={notes} />
        ) : (
          <EmptyNotes />
        )
    }
    </div>
  );
}
