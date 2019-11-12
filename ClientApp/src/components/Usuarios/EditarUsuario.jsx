import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import AgregarUsuario from './AgregarUsuario';

const EditarUsuario=({usuario,optenerUsuarioID,evEditarUsuario})=>{

    useEffect(()=>{
        const URL = window.location.pathname.split('/');
        console.log("URL ",URL[URL.length-1])
    },[])
    return(<div>
        <h3>Editar Usuario</h3>
        <AgregarUsuario evAgregarUsuario={evEditarUsuario} />
    </div>)
}


const mapStateProps=(state)=>({
    id_usuario:state.usuario_seleccion
});

const mapDispatchToProps = dispatch =>({
    async evEditarUsuario(usuario){
        console.log("Usuario => ",usuario);
    }
});

export default connect(mapStateProps,mapDispatchToProps)(EditarUsuario);