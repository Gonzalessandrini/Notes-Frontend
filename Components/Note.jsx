import { useEffect, useState } from "react";
import noteService from '../services/notes'

import { useParams, useNavigate } from "react-router-dom";
import Nav from "./Nav";

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
    <>
    <Nav/>
    <div className="container py-4">
        
        

        
                
        <form >
         <div className="px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
         <input
             type="text"
             className="form-control d-inline-block mb-0"
             style={{width: "80%"}}
             placeholder="content..."
             name="content"
             value={note.content || ""}
             onChange={handleChange}
             
           />
           <button onClick={handleSubmit} className="btn btn-primary ml-2" style={{marginLeft:"2%"}}>
             Update
           </button>
         
         </div>
           
         </form> 
 
        
       </div>

    </>

      
  );
};

export default Note;