//librerias
import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';
import ListaUsuarios from './ListaUsuarios';

const URL = window.location.pathname.split('/');

const Usuarios =({usuarios,obtenerUsuarios})=>{
    console.log('Usuarios =>' ,usuarios)

    useEffect(()=>{ 
        obtenerUsuarios();
    },[])
    return(<div>
        <div className="row">
            <div className="col-12 card">
                <h3 className="m-3">Usuarios</h3>
                <div>
                    
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Buscar Usuarios" />
                </div>
            </div>
            <ListaUsuarios usuarios={usuarios} />
        </div>
    </div>);
}


const mapStateProps=(state)=>({
    usuarios : state.Empleados || [],
});

const mapDispatchToProps = dispatch =>({
    async obtenerUsuarios(){
        let res = await obtener_empleados();
        console.log('obtener')
        dispatch(AGREGAR_EMPLEADOS(res))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Usuarios);