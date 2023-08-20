import { useState } from "react"
import { Notes } from "./Notes"

// import { useNotes } from "../hooks/useNotes"

export default function NoteForm ({addNote, deleteNote,notes}) {

    const [newNote,setNewNote]= useState('')

    const handleChange= (event)=>{
        setNewNote(event.target.value)
      }

    const handleSubmit=async (event)=>{
        event.preventDefault()

        const noteObject={
            content: newNote,
            important:Math.random() < 0.5
          }

       addNote(noteObject)

       setNewNote('')
    }

    return(

      <section>
        
      <div className="row"> 

      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white" >
   
        <form onSubmit={handleSubmit} >


          <div className="mb-3">
            <input type='text'
              className="form-control"
              onChange={handleChange}
              value={newNote}
              placeholder='Write you note content'
            />

          </div>
          
          <button type='submit' className="btn btn-primary">Crear Nota</button>
    
    
        </form>

      </div>

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
        <Notes deleteNote={deleteNote} notes={notes}/>
      </div>

      </div>

      

      </section>
      

   )
  }