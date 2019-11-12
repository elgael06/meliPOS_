import React,{useState} from 'react';
import { agregar_empleado, obtener_empleados } from '../../conexiones';

const AgregarUsuario =({evAgregarUsuario, disabled=false, nombre1, nombre2, paterno, materno})=>{
    const [firstName,setNombre] = useState(nombre1||'');
    const [lastName,setSegNombre] = useState(nombre2||'');
    const [apPaterno,setApPaterno] = useState(paterno||'');
    const [apMaterno,setApMaterno] = useState(materno||'');
    const [subministrar,setSubmin] =useState(false);

    const submin = async e => {
        e.preventDefault();
        setSubmin(true);
        if(firstName &&  apPaterno ){
             let state = await agregar_empleado({idEmpleado:0,firstName,lastName,apPaterno,apMaterno,codeBarId:'',foto:'',datos:[]});

             if(state){
                 setNombre('')
                 setSegNombre('')
                 setApPaterno('')
                 setApMaterno('')

                let res = await obtener_empleados();
                evAgregarUsuario(res);

             }else{
                 alert("Error...\n No Se Guardo ...")
             }
        }else alert('Faltan Parametros...')
        setSubmin(false);
    }
    return(<form className="col-4 card bg-gray" onSubmit={submin}>
        <div className="row">
            <div className="form-group input-rounded col-12">
                <label>Primer Nombre</label>
                <input className="form-control" required minLength="4" disabled={disabled} value={firstName} onChange={e=>setNombre(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Segundo Nombre</label>
                <input className="form-control"minLength="4" disabled={disabled} value={lastName} onChange={e=>setSegNombre(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Apeido Paterno</label>
                <input className="form-control" required minLength="4" disabled={disabled} value={apPaterno} onChange={e=>setApPaterno(e.target.value)} />
            </div>
            <div className="form-group input-rounded col-12">
                <label>Apeido Materno</label>
                <input className="form-control" minLength="4" disabled={disabled} value={apMaterno} onChange={e=>setApMaterno(e.target.value)} />
            </div>
            <div className="col-12">
               {disabled || <button type="submit" disabled={subministrar} className="btn btn-primary has-icon  float-right">
                    Guardar{"  "}<i className="mdi mdi-send"> </i>
                </button>}
            </div>
        </div>
    </form>)
}


export default AgregarUsuario;