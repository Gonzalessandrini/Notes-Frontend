import { useEffect, useState } from "react";
import noteService from '../services/notes'
import loginService from "../services/login";

export function useUser (){
    
    const [user, setUser]= useState(null)
    const [error, setError]= useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          noteService.setToken(user.token)
        }
      }, [])

      

    const handleLogout= ()=>{
        setUser(null)
        noteService.setToken(user.token)
        window.localStorage.removeItem('loggedNoteAppUser')
      }
      
      const handleLogin = async (event, username, password) => {
        event.preventDefault()
      
        try {
          const user = await loginService.login({
            username,
            password
          })

          if (user){
            window.localStorage.setItem(
              'loggedNoteAppUser', JSON.stringify(user)
            )
        
            noteService.setToken(user.token)
            await console.log(user)
            await setUser(user)
            
          } 
          }catch(e) {
            console.error(e)
            setError('Incorrect user or password')
            setTimeout(() => {
              setError(null)
            }, 5000)
          }
      }


      return {user,error,handleLogin,handleLogout}
    }