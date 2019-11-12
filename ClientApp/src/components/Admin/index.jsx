//librerias
import React,{Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';

const Admin =({obtenerUsuarios})=>{
    const [Aplication,setAplication] = useState(null);
    useEffect(()=>{ obtenerUsuarios()},[])
    return (<Fragment>

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
