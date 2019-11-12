//libreria
import { combineReducers } from 'redux';
import Usuario from './usuario.reducer';
import RouteApp from './route.reducers';
import Empleados from './empleados.reducers';

const reducers = combineReducers({
    Usuario,
    RouteApp,
    Empleados
});
export default reducers;