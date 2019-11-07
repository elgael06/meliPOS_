//librerias
import React,{useState} from 'react';
import {connect} from 'react-redux';

const Usuarios =({usuarios,evAgregarUsuario})=>{

    return(<div>
        <h3>Usuarios</h3>
        <div className="row">
            <AgregarUsuario evAgregarUsuario={evAgregarUsuario} />
        </div>
    </div>);
}

const AgregarUsuario =({evAgregarUsuario})=>{
    const [nombre,setNombre] = useState('');
    const [correo,setCorreo] = useState('');

    const submin =e=>{
        !nombre || evAgregarUsuario({nombre, correo});
        e.preventDefault();
    }
    return(<form className="col-4 card bg-gray" onSubmit={submin}>
        <div className="row">
            <label className="col-12 label">Nuevo :</label>
            <div className="form-group input-rounded col-12">
                <label>Nombre</label>
                <input className="form-control" value={nombre} onChange={e=>setNombre(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Correo</label>
                <input type="email" className="form-control" value={correo} onChange={e=>setCorreo(e.target.value)} />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success has-icon">
                    <i className="mdi mdi-account-plus-outline"></i>
                    Agregar
                </button>
            </div>
        </div>
    </form>)
}

const mapStateProps=(state)=>({
    usuarios : state.listUsuarios || [],
});

const mapDispatchToProps = dispatch =>({
    evAgregarUsuario(usuario){
        console.log("Usuario => ",usuario)
    }
});

export default connect(mapStateProps,mapDispatchToProps)(Usuarios);