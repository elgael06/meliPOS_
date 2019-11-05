//librerias
import React,{useState,Fragment} from 'react';
import { connect } from 'react-redux';
import { inicio_sesion } from '../../conexiones';
import { ADD_USER } from '../../actions';import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

const Login =({actions})=>{
    const [id,setId] = useState('');
    const [password,setPasswd] = useState('');
    const click = async event=>{

        event.preventDefault();
        try{
            let user = await inicio_sesion(id,password);
            actions(user)
        }catch(err){
            console.log(err);
        }
    }

    return (<Fragment>
    <Redirect to="/login"/> 
    <Switch>
        <Route path="/login" >
            <div className="login-container">
                <label >this is the <b>login</b></label>
                <hr/>
                <form onSubmit={click}>
                    <div><input type="text" value={id} onChange={e=>setId(e.target.value)} placeholder="ID" /></div>
                    <div><input type="password" value={password} onChange={e=>setPasswd(e.target.value)} placeholder="password" /></div>
                    <button type="submit" onClick={click}>Login</button>
                </form>
            </div>
        </Route>
    </Switch>
    </Fragment>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({
    actions(user){
        dispatch(ADD_USER(user));
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Login);