import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import {Redirect, Link } from "react-router-dom";
import { FormUsuario } from './AgregarUsuario';
import { obtener_empleado_id, actualizar_empleado } from '../../conexiones';
import { SELECCIONAR_USUARIO } from '../../actions';

const EditarUsuario=({usuario,optenerUsuarioID,evEditarUsuario})=>{
    const [ruta,setRuta] = useState(0);
    const [redirect,setRedirect] = useState(true);
    const onSubmit= async (value)=>{

        let res = await evEditarUsuario(ruta,
            {   ...usuario,
                firstName:value.firstName,
                lastName:value.lastName,
                apPaterno:value.apPaterno,
                apMaterno:value.apMaterno,
            });
        res ? setRedirect(false) :function(){
            alert('Error al Guardar !!!')
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
    return(<div className="row">
        {redirect || <Redirect to="/users" />}

        <h3 className="col-12">Editar Usuario</h3>
        {!usuario||<FormUsuario
            nombre1={usuario.firstName || ""}
            nombre2={usuario.lastName || ""}
            paterno={usuario.apPaterno || ""}
            materno={usuario.apMaterno || ""}
            evForm={onSubmit}
            cols="6"
        />}
    </div>)
}


const mapStateProps=(state)=>({
    usuario:state.usuario_seleccion
});

const mapDispatchToProps = dispatch =>({
    async evEditarUsuario(id,usuario){
        console.log("Usuario => ",usuario);
        return await actualizar_empleado(id,usuario);
    },
    async optenerUsuarioID(id){
        dispatch(SELECCIONAR_USUARIO(null));
        let res = await obtener_empleado_id(id);
        dispatch(SELECCIONAR_USUARIO(res));
    }
});

export default connect(mapStateProps,mapDispatchToProps)(EditarUsuario);