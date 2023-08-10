import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3001/api/notes'

import { useParams, useNavigate } from "react-router-dom";

const Note = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({});


  useEffect(() => {
    if (!id) return;
    const getNote = async () => {
      const { data } = await axios.get(`${baseUrl}/${id}`);
      setNote(data);
     
    };
    getNote();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      await axios.put(`${baseUrl}/${id}`, note);
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
            value={note.content}
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