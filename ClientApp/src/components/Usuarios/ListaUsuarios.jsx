import React,{useState} from 'react'
import { Link } from "react-router-dom";

const ListaUsuarios=({usuarios})=>{
    const [filtro,setFiltro] = useState("");
    
    return(<div className="col-12" style={{maxHeight:400,overflow:"auto"}}>
        <table className="table bg-white">
            <thead>
                <tr>
                    <th><label>Lista de Usuarios</label></th>
                    <th style={{maxWidth:"50px"}}>
                        <Link to="/users/add" className="btn btn-primary float-right m-2">Nuevo Usuario</Link>    
                    </th>
                </tr>
            </thead>
            <tbody>
           {usuarios.map(e=><tr title={`Usuario : ${e.idEmpleado}`} key={e.idEmpleado}>
               <td>{`${e.firstName} ${e.lastName} ${e.apPaterno} ${e.apMaterno}`}</td>
               <td style={{maxWidth:"50px"}}>
                    <Link className="btn btn-secondary btn-rounded   mdi mdi-border-color" to={`/users/edit/${e.idEmpleado}`}></Link>
                    <Link className="btn btn-secondary btn-rounded m-1 mdi mdi-key-variant" to={`/users/Access/${e.idEmpleado}`}></Link>
                    <Link className="btn btn-secondary btn-rounded mdi mdi-window-close" to={`/users/delete/${e.idEmpleado}`}></Link>
                </td>
               </tr>)} 
           </tbody>
        </table>
    </div>);
}

export default ListaUsuarios;