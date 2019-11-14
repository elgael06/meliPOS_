//librerias
import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';
import ListaUsuarios from './ListaUsuarios';

const URL = window.location.pathname.split('/');

const Usuarios =({usuarios,obtenerUsuarios})=>{
    const [filtro,setFiltro] = useState('');
    useEffect(()=>{ 
        obtenerUsuarios();
        console.log('Usuarios =>' ,usuarios)
    
    },[])

    const usuariosFiltrados = usuarios.filter(e=>e.firstName.toUpperCase().search(filtro.toUpperCase())>-1 ||
        e.lastName.toUpperCase().search(filtro.toUpperCase())>-1 ||
        e.apPaterno.toUpperCase().search(filtro.toUpperCase())>-1 ||
        e.apMaterno.toUpperCase().search(filtro.toUpperCase())>-1
    )

    return(<div className="bg-white">
        <div className="row">
            <div className="col-12">
                <h3 className="m-3">Usuarios</h3>
                <div>
                    
                </div>
                <div className="form-group">
                    <input className="form-control" onChange={e=>setFiltro(e.target.value)} value={filtro.toUpperCase()} placeholder="Buscar Usuarios" />
                </div>
            </div>
            <ListaUsuarios usuarios={usuariosFiltrados} />
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