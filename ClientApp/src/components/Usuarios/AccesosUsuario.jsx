import React,{useEffect} from 'react';
import { connect } from 'react-redux';

const AccesosUsuario=({usuario,optenerUsuarioID})=>{

    useEffect(()=>{
        const URL = window.location.pathname.split('/');
        console.log("URL ",URL[URL.length-1])
    },[])
    return(<div>
        <h3>Accesos Usuario</h3>
    </div>)
}


const mapStateProps=(state)=>({
    id_usuario:state.usuario_seleccion
});

const mapDispatchToProps = dispatch =>({
    async evEditarUsuario(usuario){
        console.log("Usuario => ",usuario);
    },

});

export default connect(mapStateProps,mapDispatchToProps)(AccesosUsuario);