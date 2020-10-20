import { combineReducers } from 'redux'
import  usuarioReducer from './usuariosReducer'

export default combineReducers({
  usuarios: usuarioReducer
});