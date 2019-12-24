import React,{useEffect,useState, Fragment} from 'react';
import { connect } from 'react-redux';
import {Redirect, useParams } from "react-router-dom";
import { FormUsuario } from './AgregarUsuario';
import { obtener_empleado_id, actualizar_empleado } from '../../conexiones';
import { SELECCIONAR_USUARIO } from '../../actions';
import UsuarioDatos from './UsuarioDatos';

const EditarUsuario=({usuario,optenerUsuarioID,evEditarUsuario})=>{
    const [redirect,setRedirect] = useState(true);
    const {id} = useParams();

    const onSubmit= async (value)=>{

        let res = await evEditarUsuario(id,
            {   ...usuario,
                firstName:value.firstName,
                lastName:value.lastName,
                apPaterno:value.apPaterno,
                apMaterno:value.apMaterno,
            });
        res ? setRedirect(false) :function(){
            alert('Error al Guardar !!!')
            optenerUsuarioID(id)
        }();
    }
    useEffect(()=>{
        console.log(`id = ${id}`);
        optenerUsuarioID(id);
    },[])
    console.log("Usuario:",usuario);
    return(<div className="row">
        {redirect || <Redirect to="/users" />}

        <h3 className="col-12">Editar Usuario</h3>
        {!usuario||<Fragment>
            <FormUsuario
                nombre1={usuario.firstName || ""}
                nombre2={usuario.lastName || ""}
                paterno={usuario.apPaterno || ""}
                materno={usuario.apMaterno || ""}
                evForm={onSubmit}
                cols="6"
            />
            <UsuarioDatos datos={usuario.datos[0] || {}} />
        </Fragment>}
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