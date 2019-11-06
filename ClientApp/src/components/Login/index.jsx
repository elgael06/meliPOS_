//librerias
import React,{useState,Fragment} from 'react';
import { connect } from 'react-redux';
import { inicio_sesion } from '../../conexiones';
import { ADD_USER, ADD_ROUTE } from '../../actions';
import { Switch, Route, Redirect } from "react-router-dom";

const Login =({actions})=>{
    const [id,setId] = useState('');
    const [password,setPasswd] = useState('');
    const click = async event=>{

        event.preventDefault();
        try{
            let user = await inicio_sesion(id,password);
            actions(user)
        }catch(err){
            console.log("Error Logeo ...",err);
        }
    }

    return (<Fragment>
    <Redirect to="/login"/> 
    <Switch>
        <Route path="/login" >
            <div className="login-container authentication-theme auth-style_1">
                <CuerpoLogin>
                    <div className="row">
                        <div className="col-12 logo-section center" >
                            <h1 className="logo">login MeliPOS</h1>
                        </div>
                    </div>
                    <form onSubmit={click} className="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">
                        <div className="form-group input-rounded">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={id} 
                                onChange={e=>setId(e.target.value)} 
                                placeholder="ID" 
                            />
                        </div>
                        <div  className="form-group input-rounded">
                            <input
                                type="password" 
                                className="form-control" 
                                value={password} 
                                onChange={e=>setPasswd(e.target.value)} 
                                placeholder="password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={click}>Login</button>
                    </form>
                </CuerpoLogin>
            </div>
        </Route>
    </Switch>
    </Fragment>);
}

const CuerpoLogin=({children})=>(<div className="row">
     <div className="col-lg-5 col-md-7 col-sm-9 col-11 mx-auto">
        <div className="grid">
        <div className="grid-body">
            {children}
        </div>
        </div>
     </div>
</div>);

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({
    actions(user){
        dispatch(ADD_USER(user));
        dispatch(ADD_ROUTE('/home'))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Login);