import {combineReducers} from 'redux';
import interaccionesReducers from './interaccionesReducers';
 
const Reducers = combineReducers({
    interacciones: interaccionesReducers
});
export default Reducers;