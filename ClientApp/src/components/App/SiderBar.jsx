//librerias
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ADD_ROUTE } from '../../actions';

const SiderBar =({usuario,change_route})=>{

    return(<div className="sidebar">
        <div className="user-profile">
            <div className="info-wrapper">
                <p className="user-name">{usuario}</p>
            </div>
        </div>
        <ul className="navigation-menu">
            <li className="nav-category-divider">MAIN</li>
            <li className="link-title">
                <Link to="/home" onClick={()=>change_route('/home')} >HOME</Link>
            </li>
            <li className="link-title">
                <Link to="/admin" onClick={()=>change_route('/admin')} >ADMIN</Link>
            </li>
            <li className="link-title">
                <Link to="/sales" onClick={()=>change_route('/sales')} >SALES</Link>
            </li>
            <li className="link-title">
                <Link to="/Monitors" onClick={()=>change_route('/Monitors')} >MONITORS</Link>
            </li>
            <li className="link-title">
                <Link to="/login" onClick={()=>change_route('/home')} >LOGIN</Link>
            </li>
        </ul>
    </div>);
}

const mapStateProps= state=>({
    usuario:state.Usuario.nombre
});

const mapDispatchToProps = dispatch =>({
    change_route(route){
        console.log(`Change to ${route}`)
        dispatch(ADD_ROUTE(route))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(SiderBar);