import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { FormUsuario } from './AgregarUsuario';
import { SELECCIONAR_USUARIO } from '../../actions';
import { obtener_empleado_id } from '../../conexiones';

const DeleteUsuario=({usuario, evEditarUsuario, optenerUsuarioID})=>{
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
    
    return(<div>
        <h3>Eliminar Usuario</h3>
        {!usuario||<FormUsuario 
            nombre1={usuario.firstName || ""}
            nombre2={usuario.lastName  || ""}
            paterno={usuario.apPaterno || ""}
            materno={usuario.apMaterno || ""}
            disabled={true} 
            cols="8"
        />}
        <button type="submit" className="btn btn-danger has-icon  float-right">
            Eliminar{"  "}<i className="mdi mdi-close"> </i>
        </button>
    </div>)
}


const mapStateProps=(state)=>({
    usuario:state.usuario_seleccion
});

const mapDispatchToProps = dispatch =>({
    async evEditarUsuario(usuario){
        console.log("Usuario => ",usuario);
    },
    async optenerUsuarioID(id){
        dispatch(SELECCIONAR_USUARIO(null));
        let res = await obtener_empleado_id(id);
        dispatch(SELECCIONAR_USUARIO(res));
    }

});

export default connect(mapStateProps,mapDispatchToProps)(DeleteUsuario);