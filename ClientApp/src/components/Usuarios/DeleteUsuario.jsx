import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import AgregarUsuario from './AgregarUsuario';

const DeleteUsuario=({usuario,optenerUsuarioID})=>{

    useEffect(()=>{
        const URL = window.location.pathname.split('/');
        console.log("URL ",URL[URL.length-1])
    },[])
    return(<div>
        <h3>Eliminar Usuario</h3>
        <AgregarUsuario disabled={true} />
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

});

export default connect(mapStateProps,mapDispatchToProps)(DeleteUsuario);