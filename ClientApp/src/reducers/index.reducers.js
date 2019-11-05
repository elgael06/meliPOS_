//libreria
import { combineReducers } from 'redux';
import Usuario from './usuario.reducer';
import RouteApp from './route.reducers';

const reducers = combineReducers({
    Usuario,
    RouteApp
});
export default reducers;