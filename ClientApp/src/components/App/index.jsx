//librerias
import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_USER, LOGIN_ROUTER } from '../../actions';
import {Switch, Route, Redirect } from "react-router-dom";
//estilos
import './styles.css';
//componentes
import Home from '../Home';
import Admin from '../Admin';
import Sales from '../Sales';
import MenuBar from './MenuBar';
import Monitors from '../Monitors';

const App=({evRemoveUser})=> {
  const salir = e =>{
    e.preventDefault();
    evRemoveUser();
  }
  return (<div className="App">
    	<strong >page main App.</strong>
    	<button onClick={salir}>salir</button>
		<hr/>
		<MenuBar />
		<div className="container">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/Sales" component={Sales} />
				<Route exact path="/Monitors" component={Monitors} />
				<Route exact path="/login" component={()=><Redirect to="/home" />} />
			</Switch>
		</div>
    </div>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({
    evRemoveUser(){
		dispatch(REMOVE_USER());
		dispatch(LOGIN_ROUTER())
    }
});

export default connect(mapStateProps,mapDispatchToProps)(App);
