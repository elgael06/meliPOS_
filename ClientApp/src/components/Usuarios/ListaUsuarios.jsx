import React from 'react'
import { Link } from "react-router-dom";

const ListaUsuarios=({usuarios})=>{

    return(<div className="col-8">
        <table className="table">
            <thead>
                <tr>
                    <th><h3>Lista de Usuarios</h3></th>
                    <th colSpan="3"><h3>Acciones</h3></th>
                </tr>
            </thead>
            <tbody>
           {usuarios.map(e=><tr title={`Usuario : ${e.idEmpleado}`} key={e.idEmpleado}>
               <td>{`${e.firstName} ${e.lastName} ${e.apPaterno} ${e.apMaterno}`}</td>
               <td> <Link to={`/users/edit/${e.idEmpleado}`}>Editar</Link></td>
               <td><Link to={`/users/Access/${e.idEmpleado}`}>Accesos</Link></td>
               <td><Link to={`/users/delete/${e.idEmpleado}`}>Borrar</Link></td>
               </tr>)} 
           </tbody>
        </table>
    </div>);
}

export default ListaUsuarios;