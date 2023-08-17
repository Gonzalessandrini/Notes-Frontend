import { useState} from "react"
import registerService from "../../services/register"
import { useUser } from "../../hooks/useUser"

import './register.css'

export default function RegisterForm ({handleLogin}) {

    const [name, setName]= useState("")
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const [active, setActive]= useState(false)

    const handleRegister= async (event)=>{
        event.preventDefault()

        try{
           const userRegister= registerService.createUser({
                name,
                username,
                password
            })

           await console.log(userRegister, 'Registrado exitosamente')


           setActive(!active)
           


        }catch(e){
            console.error(e)
        }
    }


    return (
        <>
        
    <div className={active ? 'container-form sign-up active' : 'container-form sign-up'}>
            <div className="welcome-back">
                <div className="message">
                    <h2>Wellcome!!</h2>
                    <p>If you already have an account please sign-in here</p>
                    <button onClick={()=>{setActive(!active)}} className="sign-up-btn">Iniciar Sesion</button>
                </div>
            </div>
        <form onSubmit={handleRegister} className="formulario">
            <h2 className="create-account">Crear una cuenta</h2>

            <input type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder="Nombre"/>
            <input type="text"  onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Contraseña"/>
            <button type="submit" className="btn btn-dark ">Registrarse</button>
        </form>
    </div>
    
    <div className={active ? 'container-form sign-in active' : 'container-form sign-in'}>


        <form  onSubmit={()=>{handleLogin(event,username,password)}} className="formulario">
            <h2 className="create-account">Iniciar Sesion</h2>
            
            
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Contraseña"/>
            <button type="submit" className="btn btn-dark ">Iniciar Sesion</button>
        </form>
        <div className="welcome-back">
            <div className="message">
                <h2>Notes App</h2>
                <p>If you dont have an account please sing up here</p>
                <button onClick={()=>{setActive(!active)}} className="sign-in-btn">Registrarse</button>
            </div>
        </div>
    </div>
    </>
    )
}