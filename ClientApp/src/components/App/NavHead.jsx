//librerias
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { REMOVE_USER, LOGIN_ROUTER } from '../../actions';

const NavHead =({usuario,evRemoveUser})=>{
    return (
        <nav className="t-header bg-white">
            <BrandWrapperHead />
            <ContenWrapperHead 
                usuario={usuario} 
                evRemoveUser={evRemoveUser}
            />
        </nav>
    );
}

const BrandWrapperHead =()=>(<div className="t-header-brand-wrapper">
        <Link to="/home">
            <span className="logo">
              <img src="" alt="Logotipo" />
           </span>
            <img className="logo-mini" src="" alt="logo mini" />
        </Link>
    </div>);

const ContenWrapperHead =({usuario,evRemoveUser})=>{
    const salir = e =>{
        e.preventDefault();
        console.log("salir!!!")
        evRemoveUser();
      }
    return(<div className="t-header-content-wrapper bg-gray">
        <div className="t-header-content">
            <button className="t-header-toggler t-header-mobile-toggler d-block d-lg-none">
                <i className="mdi mdi-menu"></i>
            </button>
            <ul className="nav ml-auto">
                <li className="nav-item dropdown">
                    <span className="nav-link" id="appsDropdown" data-toggle="dropdown" aria-expanded="false">
                        <i className="mdi mdi-apps mdi-1x"></i>
                        <div className="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="appsDropdown">
                            <div className="dropdown-header">
                                <h6 className="dropdown-title">Apps : {usuario || "anonimus"}</h6>
                                <p className="dropdown-title-text mt-2">Authentication required for 3 apps</p>
                            </div>
                        </div>
                    </span>
                </li>
                <li className="nav-item dropdown"> 
                    <span className="btn btn-danger btn-rounded social-icon-btn" onClick={salir}>
                        <i className="mdi mdi-account-key text-white"></i>
                    </span>
                </li>
            </ul>
        </div>
    </div>);
}

const mapStateProps= state=>({
    usuario:state.Usuario.nombre
});

const mapDispatchToProps = dispatch =>({
    evRemoveUser(){
		dispatch(REMOVE_USER());
		dispatch(LOGIN_ROUTER())
    }
});

export default connect(mapStateProps,mapDispatchToProps)(NavHead);