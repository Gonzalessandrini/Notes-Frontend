import {  useState} from "react";

import noteService from '../services/notes'

export function useNotes (){

    const [notes,setNotes]=useState([])
    const [loading,setLoading]= useState(false)


    const getNotes= ()=>{
        setLoading(true)
        noteService.getAll().then(initialNotes=>{setNotes(initialNotes)})
        setLoading(false)
    }

    const addNote= async (noteObject)=>{
        noteService.create(noteObject)
        .then(newNote=> {
            setNotes([...notes, newNote]);
        })
    }

    const deleteNote= (id)=>{
        noteService.deleted(id)
        setNotes(notes.filter(note => note.id !== id))
      }
    

    return {notes,loading,addNote,deleteNote,getNotes}

}