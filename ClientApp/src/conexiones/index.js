import Axios from "axios"
import { IP } from "./ip"

/** 
 * @param {*} usuario :objeto con dos parametros obligatorios id y password.
 * @description: comprueba el acceso de usuario y retorna true o false crea una cache de sesion. 
 */
export const inicio_sesion= async (id,password) =>{
    let respuesta = await Axios.post(`${IP}/api/login/${id}`,
    JSON.stringify(password),
    {
        headers: {
            'Content-Type': 'application/json',
        }
    });
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
    });
    return respuesta.data;
}

export const obtener_empleados = async () =>{
    let respuesta = await Axios.get(`${IP}/api/Empleados`,null,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return respuesta.data;
}
export const obtener_empleado_id = async id =>{
    let respuesta = await Axios.get(`${IP}/api/Empleados/${id}`,null,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return respuesta.data;
}
export const actualizar_empleado =async (id,value)=>{
    let respuesta = await Axios.put(`${IP}/api/Empleados/${id}`,value,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return respuesta.data;
}