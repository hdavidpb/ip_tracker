import axios from "axios";
import { config } from "dotenv";
config();
//constantes

const dataInicial = {
  loading: false,
  error: false,
  data: null,
};

const OBTENER_DATOS_EXITO = "OBTENER_DATOS_EXITO";
const CHANGE_LOADING_EXITO = "CHANGE_LOADING_EXITO";
const OBTENER_DATOS_ERROR = "OBTENER_DATOS_ERROR";
const CHANGE_LOADING_FALSE_EXTIO = "CHANGE_LOADING_FALSE_EXTIO";
//Reducer

export default function ipReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_DATOS_EXITO:
      return {
        ...state,
        data: action.payload.data,
        loading: action.payload.loading,
      };
    case OBTENER_DATOS_ERROR:
      return { ...state, error: action.payload.error };
    case CHANGE_LOADING_EXITO:
      return { ...state, loading: true };
    case CHANGE_LOADING_FALSE_EXTIO:
      return { ...state, loading: action.payload, error: action.payload };
    default:
      return state;
  }
}

//Acciones

export const getIpTrackerData = (ip) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_EdSVLHv4HGYOwPJd69Z6BvWv8xbV6&ipAddress=${ip}`
    );
    console.log("Datos");
    console.log(res.data);
    dispatch({
      type: OBTENER_DATOS_EXITO,
      payload: {
        loading: false,
        data: {
          ip: res.data.ip,
          name: res.data.as.name,
          location: {
            city: res.data.location.city,
            country: res.data.location.country,
            geonameId: res.data.location.geonameId,
            timezone: res.data.location.timezone,
            lat: res.data.location.lat,
            lng: res.data.location.lng,
          },
          isp: res.data.isp,
        },
      },
    });
  } catch (error) {
    dispatch({
      type: OBTENER_DATOS_ERROR,
      payload: {
        error: true,
      },
    });
    console.log(error);
  }
};

export const LoadingAccion = () => (dispatch) => {
  dispatch({
    type: CHANGE_LOADING_EXITO,
    payload: true,
  });
};

export const LoadingFalseAccion = () => (dispatch) => {
  dispatch({
    type: CHANGE_LOADING_FALSE_EXTIO,
    payload: false,
  });
};
