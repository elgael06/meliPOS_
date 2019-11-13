//libreria
import { combineReducers } from 'redux';
import Usuario from './usuario.reducer';
import RouteApp from './route.reducers';
import Empleados from './empleados.reducers';
import { usuario_seleccion } from './usuario_seleccion.reducers';

const reducers = combineReducers({
    Usuario,
    RouteApp,
    Empleados,
    usuario_seleccion
});
export default reducers;