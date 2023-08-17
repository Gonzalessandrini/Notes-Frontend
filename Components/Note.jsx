import { useEffect, useState } from "react";
import noteService from '../services/notes'

import { useParams, useNavigate } from "react-router-dom";

const Note = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({});


  useEffect( () => {
    const getNote= ()=>{
      if (!id) return;
    noteService.getNote(id)
    .then(note=> {setNote(note)})
    }

    getNote()

    console.log(note)
    

  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();

      noteService.update(id, note)
    
      
      return navigate("/");
    }
  
        
    const handleChange = (e) => {
            const newNote = { ...note };
            newNote[e.target.name] = e.target.value;
            setNote(newNote);
          };


  return (
    

      <div className="container">
        
        <form className="post">
        <div>
        <input
            type="text"
            className="form-control"
            placeholder="content..."
            name="content"
            value={note.content || ""}
            onChange={handleChange}
            
          />
        </div>
          
          
          <button onClick={handleSubmit} className="btn btn-primary">
            Update
          </button>
          
        </form>

       
      </div>
  );
};

export default Note;