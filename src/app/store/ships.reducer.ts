import { Ship } from '../api-rest/model/ship';
import { ShipsActionTypes, ShipsAction } from './actions';


export interface ShipsState {
  count: number;
  next: string;
  previous: string;
  results: Array<Ship>;
}

const initialState: ShipsState = {
  count: 0,
  next: '',
  previous: '',
  results: []
};

export function ShipReducer(state: ShipsState = initialState, action: ShipsAction) {
  switch (action.type) {
    case ShipsActionTypes.LOAD_SHIPS:
      return {
        ...state,
      }
    case ShipsActionTypes.LOAD_SHIPS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    case ShipsActionTypes.LOAD_SHIPS_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}