//librerias
import React,{Fragment,useState} from 'react';
import { connect } from 'react-redux';
import Usuarios from './Usuarios';
import Accesos from './Accesos';
import { obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';

const Admin =({obtenerUsuarios})=>{
    const [Aplication,setAplication] = useState(null);
    const cambiar =(app)=>{
        setAplication(app);
        obtenerUsuarios();
    }
    return (<Fragment>
        <div className="btn-group mb-0">
        <a onClick={()=>cambiar(<Usuarios />)} className="btn btn-light">Usuarios</a>
        <a onClick={()=>cambiar(<Accesos />)} className="btn btn-light">Accesos</a>
    </div>
    <hr/>
    {Aplication || <h3>Seleccione Una Opcion.</h3>}
    </Fragment>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({
    async obtenerUsuarios(){
        let res = await obtener_empleados();
        console.log('obtener')
        dispatch(AGREGAR_EMPLEADOS(res))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Admin);
