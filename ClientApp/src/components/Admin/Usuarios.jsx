//librerias
import React,{useState} from 'react';
import {connect} from 'react-redux';
import { agregar_empleado, obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';

const Usuarios =({usuarios,evAgregarUsuario})=>{
    console.log('Usuarios =>' ,usuarios)
    return(<div>
        <div className="row">
            <AgregarUsuario evAgregarUsuario={evAgregarUsuario} />
            <ListaUsuarios usuarios={usuarios} />
        </div>
    </div>);
}

const AgregarUsuario =({evAgregarUsuario})=>{
    const [firstName,setNombre] = useState('');
    const [lastName,setSegNombre] = useState('');
    const [apPaterno,setApPaterno] = useState('');
    const [apMaterno,setApMaterno] = useState('');

    const submin = async e=>{
        if(firstName && lastName && apPaterno && apMaterno){
             let state = agregar_empleado({idEmpleado:0,firstName,lastName,apPaterno,apMaterno,codeBarId:'',foto:'',datos:[]});

             if(state){
                 setNombre('')
                 setSegNombre('')
                 setApPaterno('')
                 setApMaterno('')

                let res = evAgregarUsuario();
                await obtener_empleados(res);

             }else{
                 alert("Error...\n No Se Guardo ...")
             }
        }else alert('Faltan Parametros...')

        e.preventDefault();
    }
    return(<form className="col-4 card bg-gray" onSubmit={submin}>
        <div className="row">
            <label className="col-12 label">Nuevo :</label>
            <div className="form-group input-rounded col-12">
                <label>Primer Nombre</label>
                <input className="form-control" value={firstName} onChange={e=>setNombre(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Segundo Nombre</label>
                <input className="form-control" value={lastName} onChange={e=>setSegNombre(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Apeido Paterno</label>
                <input className="form-control" value={apPaterno} onChange={e=>setApPaterno(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Apeido Materno</label>
                <input className="form-control" value={apMaterno} onChange={e=>setApMaterno(e.target.value)} />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary has-icon btn-block">
                    <i className="mdi mdi-account-plus-outline"></i>
                    Agregar
                </button>
            </div>
        </div>
    </form>)
}

const ListaUsuarios=({usuarios})=>{

    return(<div className="col-7">
        <h3>Lista de Usuarios</h3>
        <ul>
           {usuarios.map(e=><li title={`Usuario : ${e.idEmpleado}`} key={e.idEmpleado}>{`${e.firstName} ${e.lastName} ${e.apPaterno} ${e.apMaterno}`}</li>)} 
        </ul>
    </div>);
}

const mapStateProps=(state)=>({
    usuarios : state.Empleados || [],
});

const mapDispatchToProps = dispatch =>({
    evAgregarUsuario(usuario){
        console.log("Usuario => ",usuario);
        dispatch(AGREGAR_EMPLEADOS(usuario))
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Usuarios);