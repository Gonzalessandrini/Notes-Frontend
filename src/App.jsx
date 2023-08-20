import './App.css';
import { useEffect} from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import LoginForm from '../Components/LoginForm';
import NoteForm from '../Components/NoteForm';
import Notication from '../Components/Notification'
import { useNotes } from '../hooks/useNotes'
import Nav from '../Components/Nav';

import Note from '../Components/Note';

import { useUser } from '../hooks/useUser';
import RegisterForm from '../Components/RegisterForm';



function App() {

  const {
    notes,
    loading,
    getNotes,
    addNote,
    deleteNote}= useNotes()

  const {
    user,
    error,
    handleLogout,
    handleLogin
  } = useUser()

  useEffect(()=>{
    getNotes()
},[getNotes])

  return (

<>
<BrowserRouter>

      {loading ? "Cargando..." : ""}

      <Nav handleLogout={handleLogout} user={user}/>



      <span style={{color: "red"}}><Notication message={error} /> </span>

          <Routes>

              <Route path='/' element={
              user 
              
              ? 
              <NoteForm
              addNote={addNote}
              deleteNote={deleteNote}
              notes={notes}
              /> 
              : <RegisterForm handleLogin={handleLogin}/>
           } />

            <Route path='/notes/:id' element={<Note/>}/>


          </Routes>
      </BrowserRouter>


</>  



  )
}

export default App