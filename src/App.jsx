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


function App() {

  const {
    notes,
    loading,
    getNotes,
    addNote,
    deleteNote}= useNotes()

  const {
    username,
    password,
    user,
    error,
    handleLogout,
    handleLogin,
    handlePasswordChange,
    handleUsernameChange
  } = useUser()

  useEffect(()=>{
    getNotes()
},[getNotes])

  return (

    <>

    <div className='row'>

    <BrowserRouter>

      {loading ? "Cargando..." : ""}

      <Nav handleLogout={handleLogout}/>


  
      <h1>Notes</h1>

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
              : <LoginForm
              username={username}
              password={password}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
              handleSubmit={handleLogin}
           />
           } />

            <Route path='/notes/:id' element={<Note/>}/>

          </Routes>
      </BrowserRouter>

    </div>
    </>

  )
}

export default App
