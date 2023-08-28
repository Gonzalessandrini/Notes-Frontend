import './register.css'
import { useState} from "react"
import registerService from "../../services/register"
import { useUser } from '../UserContext'
import { Link } from 'react-router-dom'


export default function RegisterForm () {

    const [name, setName]= useState("")
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")

    const {handleLogin}= useUser()



    const handleRegister= async (event)=>{
        event.preventDefault()

        try{
           const userRegister= registerService.createUser({
                name,
                username,
                password
            })

           await console.log(userRegister, 'Registrado exitosamente')
           


        }catch(e){
            console.error(e)
        }
    }


    return (
      <section>
      <div className='row g-0'>

      <div className="col-lg-7 d-none d-lg-block">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    
                    <div className="carousel-inner">
                      <div className="carousel-item img-1 d-flex justify-content-center aling-items-center min-vh-100 active">
                        <div className="carousel-caption ">
                          <h3 className="font-weight-bold">Notes helps you stay organized, remember your tasks and create a routine</h3>
                        </div>
                      </div>
                      <div className="carousel-item img-2 min-vh-100">
                        <div className="carousel-caption carrousel-text">
                          <h3 className="font-weight-bold">Notes helps you stay organized, remember your tasks and create a routine</h3>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only"></span>
                    </a>
                  </div>
            </div>
  
      <div className="col-lg-5 bg-dark d-flex flex-column align-items-end min-vh-100">
                  <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                      <img className='logo'></img>
                  </div>
                  <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                  <h1 className="font-weight-bold mb-4">Bienvenido</h1>
                  <form onSubmit={
                    (e)=>handleLogin(e, username,password)
                    
                    } className="mb-5">
                      <div className="mb-4">
                        <label  className="form-label font-weight-bold">Username</label>
                        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} className="form-control bg-dark-x border-0 " id="exampleInputEmail1" placeholder="Ingresa tu email" aria-describedby="emailHelp"/>
                      </div>
                      <div className="mb-4">
                        <label  className="form-label font-weight-bold">Contraseña</label>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control bg-dark-x border-0 mb-2 " placeholder="Ingresa tu contraseña" id="exampleInputPassword1"/>
                        <a href="" id="emailHelp" className="form-text text-muted text-decoration-none">¿Has olvidado tu contraseña?</a>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    </form>
  
                  
                  </div>
                  <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                      <p className="d-inline-block mb-0">¿Todavia no tienes una cuenta?</p> <Link to={'/register'}><a href="" className="text-light font-weight-bold text-decoration-none">Crea una ahora</a></Link>
                  </div>
              </div>
  
      </div>
  
      </section>
    )
}