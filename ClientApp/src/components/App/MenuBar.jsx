//librerias
import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ADD_ROUTE } from '../../actions';

const MenuBar =({change_route})=>{

    return (<div>
        <label>MENU APLICATIONS.</label>
        <ul>
            <Link to="/home" onClick={()=>change_route('/home')} ><li>Home</li></Link>
            <Link to="/admin" onClick={()=>change_route('/admin')} ><li>admin</li></Link>
            <Link to="/sales" onClick={()=>change_route('/sales')} ><li>Sales</li></Link>
            <Link to="/Monitors" onClick={()=>change_route('/Monitors')} ><li>Monitors</li></Link>
            <Link to="/login" onClick={()=>change_route('/home')} ><li>login</li></Link>
        </ul>
    </div>);
}

const mapStateProps=()=>({
});

const mapDispatchToProps = dispatch =>({
    change_route(route){
        console.log(`Change to ${route}`)
        dispatch(ADD_ROUTE(route))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(MenuBar);
