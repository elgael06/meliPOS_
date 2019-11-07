//librerias
import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import {Switch, Route, Redirect, Link } from "react-router-dom";
//estilos
import './styles.css';
//componentes
import Home from '../Home';
import Admin from '../Admin';
import Sales from '../Sales';
import Monitors from '../Monitors';
import NavHead from './NavHead';
import SiderBar from './SiderBar';

const App=()=> {

  return (<Fragment>
	  	<NavHead />
		<div className="page-body">
			<SiderBar />
			<div className="page-content-wrapper bg-white">
				<div className="page-content-wrapper-inner">
					<div className="content-viewport">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/admin" component={Admin} />
							<Route exact path="/Sales" component={Sales} />
							<Route exact path="/Monitors" component={Monitors} />
							<Route exact path="/login" component={()=><Redirect to="/home" />} />
						</Switch>
					</div>
				</div>
				<footer className="footer bg-gray">
					<div className="row">
						<div className="col-sm-6 text-center text-sm-right order-sm-1">
							<ul className="text-gray">
								<li><Link to="/">Terms of use</Link></li>
								<li><Link to="/">Privacy Policy</Link></li>
							</ul>
						</div>
						<div className="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
							<small className="text-muted d-block">
								Copyright © 2019 
								<a href="http://www.melipos.duckdns.org" target="noopener noreferrer">MeliPOS</a>.
								 All rights reserved
							</small>
							<small className="text-gray mt-2">
								Handcrafted With <i className="mdi mdi-heart text-danger"></i>
							</small>
						</div>
					</div>
				</footer>
			</div>
		</div>
    </Fragment>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({
});

export default connect(mapStateProps,mapDispatchToProps)(App);
