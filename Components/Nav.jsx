import { Link } from "react-router-dom"

const Nav= ({handleLogout,user})=>{
    return(
      <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Notes</a>
    
    {user
    
    ? <button className="btn btn-danger" onClick={()=>{handleLogout()}}>Cerrar sesion</button> 

    : <p>Wellcome to notes app</p>
    }
    
  </div>
</nav>

    )
}

export default Nav