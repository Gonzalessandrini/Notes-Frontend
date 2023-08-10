import { useEffect, useState } from "react";
import noteService from '../services/notes'
import loginService from "../services/login";

export function useUser (){
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
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
    const  handleUsernameChange= (e) => {setUsername(e.target.value)}

    const handlePasswordChange=  (e) => {setPassword(e.target.value)}
      

    const handleLogout= ()=>{
        setUser(null)
        noteService.setToken(user.token)
        window.localStorage.removeItem('loggedNoteAppUser')
      }
      
      const handleLogin = async (event) => {
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
            setUsername('')
            setPassword('')
          } 
          }catch(e) {
            setError('Incorrect user or password')
            setTimeout(() => {
              setError(null)
            }, 5000)
          }
      }


      return {username,password,user,error, handleLogout,handleLogin,handleUsernameChange,handlePasswordChange}
    }