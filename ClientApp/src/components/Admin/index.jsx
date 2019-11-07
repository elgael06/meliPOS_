//librerias
import React,{Fragment,useState} from 'react';
import { connect } from 'react-redux';
import Usuarios from './Usuarios';
import Accesos from './Accesos';

const Admin =()=>{
    const [Aplication,setAplication] = useState(null);
    return (<Fragment>
        <div className="btn-group mb-0">
        <a onClick={()=>setAplication(<Usuarios />)} className="btn btn-light">Usuarios</a>
        <a onClick={()=>setAplication(<Accesos />)} className="btn btn-light">Accesos</a>
    </div>
    <hr/>
    {Aplication || <h3>Seleccione Una Opcion.</h3>}
    </Fragment>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateProps,mapDispatchToProps)(Admin);
