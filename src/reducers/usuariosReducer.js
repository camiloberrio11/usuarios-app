import {
  OBTENER_USUARIOS,
  OBTENER_USUARIOS_EXITOSO,
  OBTENER_USUARIOS_ERROR
} from '../types/index'

const initialState = {
  usuarios: [],
  loading: false,
  error: null
}

function usuarioReducer (state = initialState, action) {
  switch (action.type) {
    case OBTENER_USUARIOS:
      return {
        ...state,
        loading: action.payload
      }
    case OBTENER_USUARIOS_EXITOSO:
      return {
        ...state,
        loading: false,
        error: null,
        usuarios: action.payload
      }
    case OBTENER_USUARIOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default usuarioReducer