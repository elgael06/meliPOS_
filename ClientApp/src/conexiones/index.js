import Axios from "axios"
import { IP } from "./ip"

/** 
 * Usuario
 */
export const inicio_sesion= async (id,password) =>{
    let respuesta = await Axios.post(`${IP}/api/login/${id}`,
    JSON.stringify(password),
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err=>console.log('Error de conexion!!!',err));
    console.log("login=>",respuesta.data);
    return respuesta.data;
}
/**
 * Emplados
 */
export const agregar_empleado = async value =>{
    let respuesta = await Axios.post(`${IP}/api/Empleados`,
    JSON.stringify(value),
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err=>console.log('Error de conexion!!!',err));
    return respuesta.data;
}

export const obtener_empleados = async () =>{
    let respuesta = await Axios.get(`${IP}/api/Empleados`,null,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err=>console.log('Error de conexion!!!',err));
    return respuesta.data;
}
export const obtener_empleado_id = async id =>{
    try{
        let respuesta = await Axios.get(`${IP}/api/Empleados/${id}`,null,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }).catch(err=>console.log('Error de conexion!!!',err));
        return respuesta.data;
    }catch{
        return null;
    }
}
export const actualizar_empleado =async (id,value)=>{
    let respuesta = await Axios.put(`${IP}/api/Empleados/${id}`,value,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err=>console.log('Error de conexion!!!',err));
    return respuesta.data;
}
export const borrar_empleado =async id=>{
    let respuesta = await Axios.delete(`${IP}/api/Empleados/${id}`,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err=>console.log('Error de conexion!!!',err));
    return respuesta.data;
}
//Datos
export const verificar_datos_empleado = async id_empleado =>{

    let respuesta = await Axios.get(`${IP}/api/UserData/${id_empleado}`,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err=>console.log('Error de conexion!!!',err));
    return respuesta;
}

