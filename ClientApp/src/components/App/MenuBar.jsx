//librerias
import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const MenuBar =()=>{

    return (<div>
        <label>MENU APLICATIONS.</label>
        <ul>
            <Link to="/home" ><li>Home</li></Link>
            <Link to="/admin" ><li>admin</li></Link>
            <Link to="/sales" ><li>Sales</li></Link>
            <Link to="/login" ><li>login</li></Link>
        </ul>
    </div>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateProps,mapDispatchToProps)(MenuBar);
