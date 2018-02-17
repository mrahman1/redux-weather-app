import { GET_WEATHER } from '../actions/types'

const weatherReducer = (state = {}, action) => {
  switch (action.type){

    case GET_WEATHER:
      return  action.payload;

    default:
      return state;
  }
}

export default weatherReducer;
