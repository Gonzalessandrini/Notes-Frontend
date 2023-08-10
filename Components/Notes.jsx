import { Link } from "react-router-dom"



function ListOfNotes ({notes,deleteNote}){
    return(
//     <div >
//         <ol>
//             {
//                 notes.map(note=> (
//                     <li key={note.id}>     

// <strong><p>{note.content}</p></strong>
//                         <time><small>{note.date}</small></time>
//                         <button onClick={()=>{deleteNote(note.id)}}>Delete</button>
                    
//                     <Link to={`/notes/${note.id}`}>
//                         <button>Update</button>
//                     </Link>
                     
                        
                        
                        
                        
//                      </li>
//                 ))
//             }
//         </ol>
//     </div>

<>
        
        <table className="table table-striped table-light">
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