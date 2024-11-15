import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span 
      style={{cursor:'pointer'}} 
      onClick={()=>navigate('/')}
      className="navbar-brand mb-0 h1">Examen</span>
    <div className="navbar-nav">
      {/* <li className="nav-item">
          <a style={{cursor:'pointer'}} className="nav-link active" onClick={()=>navigate('/admin/partidas')}>Partidas</a>
        </li>
      <li className="nav-item">
        <a style={{cursor:'pointer'}} className="nav-link active" onClick={()=>navigate('/admin/cuentas')}>Catalogo</a>
      </li> */}
      <li className="nav-item">
      <a style={{cursor:'pointer'}} className="nav-link active" onClick={()=>navigate('/login')}>Login</a>
      </li>
    </div>
  </div>
</nav>
}

export default Navbar;
