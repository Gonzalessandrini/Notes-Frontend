import { Link } from "react-router-dom"

const Nav= ({handleLogout})=>{
    return(
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link to={'/'}>
    <p className="navbar-brand">Notes</p>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark"  id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
      
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Notes</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
               
          <button type="button" className="btn btn-danger" onClick={handleLogout}>Cerrar Sesion</button>
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>

    )
}

export default Nav