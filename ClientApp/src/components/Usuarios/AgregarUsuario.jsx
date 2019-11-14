import React,{useState} from 'react';
import {Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { agregar_empleado, obtener_empleados } from '../../conexiones';
import { AGREGAR_EMPLEADOS } from '../../actions';

const AgregarUsuario =({evAgregarUsuario})=>{
    const [subministrar,setSubmin] =useState(false);
    const [redirect,setRedirect] = useState(true);

    const submin = async ({idEmpleado=0,firstName,lastName,apPaterno,apMaterno,codeBarId='',foto='',datos=[]}) => {
        setSubmin(true);
        let state = await agregar_empleado({idEmpleado,firstName,lastName,apPaterno,apMaterno,codeBarId,foto,datos});

        if(state){
                let res = await obtener_empleados();
                evAgregarUsuario(res);
                setRedirect(false)
        }else{
            alert('Error...\n No Se Guardo ...')
        }
        setSubmin(false);
    }
    return redirect ?(<div>
        <div >
            <h4 className="label">Nuevo :</h4>
        </div>
        <FormUsuario 
            evForm={submin}
            subministrar={subministrar}
        />
    </div>):<Redirect to="/users" />
}

export const FormUsuario =({disabled=false, nombre1, nombre2, paterno, materno,subministrar, evForm,cols="4"})=>{
    const [firstName,setNombre] = useState(nombre1||'');
    const [lastName,setSegNombre] = useState(nombre2||'');
    const [apPaterno,setApPaterno] = useState(paterno||'');
    const [apMaterno,setApMaterno] = useState(materno||'');

    const submin = e => {
        e.preventDefault();

        if(firstName &&  apPaterno ){
            evForm({firstName,lastName,apPaterno,apMaterno});
            setNombre('')
            setSegNombre('')
            setApPaterno('')
            setApMaterno('')
            alert('Listo...')
        }else{
            alert('Faltan Parametros...')
        }
    }
    return (<form className={`col-${cols|| 4} card-body bg-white`} onSubmit={submin}>
        <div className="row">
            <div className="form-group col-12">
                <label>Primer Nombre</label>
                <input className="form-control" required minLength="4" disabled={disabled} value={firstName} onChange={e=>setNombre(e.target.value)} />
            </div>
            <div className="form-group col-12">
                <label>Segundo Nombre</label>
                <input className="form-control"minLength="4" disabled={disabled} value={lastName} onChange={e=>setSegNombre(e.target.value)} />
            </div>
            <div className="form-group col-12">
                <label>Apeido Paterno</label>
                <input className="form-control" required minLength="4" disabled={disabled} value={apPaterno} onChange={e=>setApPaterno(e.target.value)} />
            </div>
            <div className="form-group col-12">
                <label>Apeido Materno</label>
                <input className="form-control" minLength="4" disabled={disabled} value={apMaterno} onChange={e=>setApMaterno(e.target.value)} />
            </div>
            <div className="col-12">
            {disabled || <button type="submit" disabled={subministrar} className="btn btn-success has-icon  float-right">
                    Guardar{"  "}
                </button>}
            </div>
        </div>
    </form>);
};


const mapStateProps=(state)=>({
});

const mapDispatchToProps = dispatch =>({
    evAgregarUsuario(usuario){
        console.log("Usuario => ",usuario);
        dispatch(AGREGAR_EMPLEADOS(usuario))
    },
});

export default connect(mapStateProps,mapDispatchToProps)(AgregarUsuario);