import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { FormUsuario } from './AgregarUsuario';
import { SELECCIONAR_USUARIO } from '../../actions';
import { obtener_empleado_id, borrar_empleado } from '../../conexiones';
import { Redirect } from 'react-router-dom';

const DeleteUsuario=({usuario, optenerUsuarioID})=>{
    const [ruta,setRuta] = useState(0);
    const [redirect,setRedirect] = useState(true);
    const onSubmit= async e =>{
        e.preventDefault();
        let res = await borrar_empleado(ruta);
        res ?function(){ 
            alert(`listo...\n Usuario ${res} fue eliminado !!!`)
            setRedirect(false)
         }() :function(){
            alert('Error al Borrar !!!')
            optenerUsuarioID(ruta)
        }();
    }
    useEffect(()=>{
        const URL = window.location.pathname.split('/');
        console.log("URL ",URL[URL.length-1])
        setRuta(URL[URL.length-1])
        optenerUsuarioID(URL[URL.length-1]);
    },[])
    console.log("Usuario:",usuario);
    
    return (<div>

        {redirect || <Redirect to="/users" />}
        <h3>Eliminar Usuario</h3>
        {!usuario||<FormUsuario 
            nombre1={usuario.firstName || ""}
            nombre2={usuario.lastName  || ""}
            paterno={usuario.apPaterno || ""}
            materno={usuario.apMaterno || ""}
            disabled={true} 
            cols="8"
        />}
        <i onClick={onSubmit} className="btn btn-danger has-icon  float-right">
            Eliminar
        </i>
    </div>)
}


const mapStateProps=(state)=>({
    usuario:state.usuario_seleccion
});

const mapDispatchToProps = dispatch =>({
    async optenerUsuarioID(id){
        dispatch(SELECCIONAR_USUARIO(null));
        let res = await obtener_empleado_id(id);
        dispatch(SELECCIONAR_USUARIO(res));
    }

});

export default connect(mapStateProps,mapDispatchToProps)(DeleteUsuario);