// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from '../reducers/index.reducers';

const initialState = {
    Usuario: JSON.parse(localStorage.User || null),
    RouteApp:'/home',
    Empleados:[],
    usuario_seleccion:null
};

export default createStore(reducers,initialState);