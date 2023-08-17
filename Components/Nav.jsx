import { Link } from "react-router-dom"

const Nav= ({handleLogout,user})=>{
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Notes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div  id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {
          user
          ? <button onClick={handleLogout} className="btn btn-danger">Cerrar sesion</button>
          : <span>Welcome!! Application to create, delete and update notes </span>
        }
        
      </div>
    </div>
  </div>
</nav>

    )
}

export default Nav