//librerias
import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_USER } from '../../actions';
import {Switch, Route, Redirect } from "react-router-dom";
//estilos
import './styles.css';
//componentes
import Home from '../Home';
import Admin from '../Admin';
import Sales from '../Sales';
import MenuBar from './MenuBar';

const App=({evRemoveUser})=> {
  const salir = e =>{
    e.preventDefault();
    evRemoveUser();
  }
  return (<div className="App">
      <label >page main <b>App.</b></label>
      <button onClick={salir}>salir</button>
	  <hr/>
	  <MenuBar />
        <Switch>
        	<Route exact path="/" component={Home} />
        	<Route exact path="/home" component={Home} />
        	<Route exact path="/admin" component={Admin} />
        	<Route exact path="/Sales" component={Sales} />
            <Route exact path="/login" component={()=><Redirect to="/" />} />
        </Switch>
    </div>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({
    evRemoveUser(){
        dispatch(REMOVE_USER());
    }
});

export default connect(mapStateProps,mapDispatchToProps)(App);
