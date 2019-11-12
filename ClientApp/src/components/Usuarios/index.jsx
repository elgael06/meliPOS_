//librerias
import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';
import AgregarUsuario from './AgregarUsuario';
import ListaUsuarios from './ListaUsuarios';

const URL = window.location.pathname.split('/');

const Usuarios =({usuarios,evAgregarUsuario,obtenerUsuarios})=>{
    console.log('Usuarios =>' ,usuarios)

    useEffect(()=>{ 
        obtenerUsuarios();
    },[])
    return(<div>
        <div className="row">
            <h3 className="col-12 label">Nuevo :</h3>
            <AgregarUsuario evAgregarUsuario={evAgregarUsuario} />
            <ListaUsuarios usuarios={usuarios} />
        </div>
    </div>);
}


const mapStateProps=(state)=>({
    usuarios : state.Empleados || [],
});

const mapDispatchToProps = dispatch =>({
    evAgregarUsuario(usuario){
        console.log("Usuario => ",usuario);
        dispatch(AGREGAR_EMPLEADOS(usuario))
    },
    async obtenerUsuarios(){
        let res = await obtener_empleados();
        console.log('obtener')
        dispatch(AGREGAR_EMPLEADOS(res))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Usuarios);