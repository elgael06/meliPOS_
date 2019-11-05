import React from 'react';
//libreria
import { connect } from 'react-redux';
import {
    BrowserRouter as Router
  } from "react-router-dom";

import Login from '../components/Login';
import App from '../components/App';


const RouterApp=({user})=>{

    return <Router>
        {user ? <App/>:<Login/>}
    </Router>;
} 
const mapStateProps= state =>({
    user:state.Usuario
});
const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateProps,mapDispatchToProps)(RouterApp);
