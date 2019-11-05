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
    return respuesta.data
}
