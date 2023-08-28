import { Link } from "react-router-dom"
import { useUser } from "./UserContext"
import { useNavigate } from "react-router-dom"

const Nav= ()=>{
  const {user,handleLogout} = useUser()
  const navigate = useNavigate()
    return(
      <nav className="navbar navbar-dark bg-dark " style={{border:"1px solid #303030"}}>
  <div className="container-fluid">
    <Link to={'/'}><a href="" className="text-light navbar-brand ">Notes</a></Link>
    
    
    {user
    
    ? <button className="btn btn-danger" 
    onClick={()=>{
      handleLogout()
      return navigate('/')
    
    }}>Cerrar sesion</button> 

    : <p>Wellcome to notes app</p>
    }
    
  </div>
</nav>

    )
}

export default Nav