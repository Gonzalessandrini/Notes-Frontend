import { Link } from "react-router-dom"
import './login.css'
import Nav from "../Nav"
import { useState} from "react"
import registerService from "../../services/register"
import { useNavigate } from "react-router-dom"
import { useUser } from "../UserContext"

export default function LoginForm () {

  const [name, setName]= useState("")
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const {handleLogin,error,setError} = useUser()
    const navigate = useNavigate()


    const handleRegister= async (event)=>{
        event.preventDefault()

        if (!name || !username || !password) {
          setError('Please fill out all fields.');
          setTimeout(() => {
            setError(null);
          }, 5000);
          return;
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
          setError('Name must contain only letters, numbers, and spaces.');
          setTimeout(() => {
            setError(null);
          }, 5000);
          return;
        }

        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
          setError('Username must contain only letters, numbers, and underscores.');
          setTimeout(() => {
            setError(null);
          }, 5000);
          return;
        }

        if (!/(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
          setError('Password must contain at least one uppercase letter and one number.');
          setTimeout(() => {
            setError(null);
          }, 5000);
          return;
        }

        try{
           const userRegister= await registerService.createUser({
                name,
                username,
                password
            })

           await console.log(userRegister, 'Registrado exitosamente')

           setName('')
           setPassword('')
           setUsername('')

           handleLogin(event,username,password)

           setTimeout(() => {
            return navigate('/')
          }, 300);

           


        }catch(e){
            console.error(e)
        }
    }

    return (
      <section>
        <Nav/>
      <div className='bg-dark row g-0'>

  
      <div className="wrapper d-flex flex-column align-items-end min-vh-100">
                  <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                      <img className='logo'></img>
                  </div>
                  <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                  <h1 className="font-weight-bold mb-4">Bienvenido</h1>
                  <form onSubmit={(e)=>{handleRegister(e)}} className="mb-5">

                  <div className="mb-4">
                        <label  className="form-label font-weight-bold">Nombre</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text"className="form-control bg-dark-x border-0 "  placeholder="Ingresa tu email" aria-describedby="emailHelp"/>
                      </div>

                      <div className="mb-4">
                        <label  className="form-label font-weight-bold">Username</label>
                        <input onChange={(e)=>{setUsername(e.target.value)}} type="text"className="form-control bg-dark-x border-0 "  placeholder="Ingresa tu email" aria-describedby="emailHelp"/>
                      </div>
                      <div className="mb-4">
                        <label  className="form-label font-weight-bold">Contraseña</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password"  className="form-control bg-dark-x border-0 mb-2 " placeholder="Ingresa tu contraseña" id="exampleInputPassword1"/>
                        <a href="" id="emailHelp" className="form-text text-muted text-decoration-none">¿Has olvidado tu contraseña?</a>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Registrarte</button>
                    </form>

                    <span style={{color:"red"}}>{error}</span>
  
                  
                  </div>
                  <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                      <p className="d-inline-block mb-0">¿Tienes Cuenta?</p> <Link to={'/'}><a href="" className="text-light font-weight-bold text-decoration-none">Inicia sesion</a></Link>
                  </div>
              </div>
  
      </div>
  
      </section>
      

    )
  }
  