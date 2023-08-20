import { Link } from "react-router-dom"



function ListOfNotes ({notes,deleteNote}){
    return(


<>
        
        <table className="table table-striped table-light" style={{border:"1px "}}>
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
                <td> {note.content} </td>
                <td> {note.date} </td>
                <td>
                <Link to={`/notes/${note.id}`}>
                  <button
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={()=>{deleteNote(note.id)}}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>)
}

function EmptyNotes () {
    return (
        <p>No se encontraron notas</p>
    )
}

export function Notes ({notes, deleteNote}){

    const hasNotes= notes?.length > 0

    return (
        
            hasNotes 
            ? <ListOfNotes deleteNote={deleteNote} notes={notes}/>
            : <EmptyNotes/>
        
    )
}