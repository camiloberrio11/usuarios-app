import {
  OBTENER_USUARIOS,
  OBTENER_USUARIOS_EXITOSO,
  OBTENER_USUARIOS_ERROR
} from '../types/index'
import { methodGetFetch } from '../config/rest'

function obtenerUsuariosAction() {
  return async dispatch => {
    dispatch(obtenerUsuarios())
    try {
      const responseService = await methodGetFetch('users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE')
      dispatch(obtenerUsuariosExitoso(responseService))
    } catch (error) {
      dispatch(obtenerUsuariosError())
    }
  }
}

const obtenerUsuarios = () => ({
  type: OBTENER_USUARIOS,
  payload: true
})

const obtenerUsuariosExitoso = listadoUsuarios => ({
  type: OBTENER_USUARIOS_EXITOSO,
  payload: listadoUsuarios
})

const obtenerUsuariosError = () => ({
  type: OBTENER_USUARIOS_ERROR,
  payload: true
})

export {
  obtenerUsuariosAction
}