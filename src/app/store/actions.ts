import { Action } from '@ngrx/store';
import { Ship } from '../api-rest/model/ship';

export enum ShipsActionTypes {
  LOAD_SHIPS = '[GETSHIPS] Load Ships',
  LOAD_SHIPS_SUCCESS = '[GETSHIPS] Load Ships Success',
  LOAD_SHIPS_FAILURE = '[GETSHIPS] Load Ships Failure',

}

export class LoadShipsAction implements Action {
  readonly type = ShipsActionTypes.LOAD_SHIPS
}
export class LoadShipsSuccessAction implements Action {
  readonly type = ShipsActionTypes.LOAD_SHIPS_SUCCESS

  constructor(public payload: Array<Ship>) { }

}
export class LoadShipsFailureAction implements Action {
  readonly type = ShipsActionTypes.LOAD_SHIPS_FAILURE

  constructor(public payload: string) { }
}


export type ShipsAction =
  LoadShipsAction |
  LoadShipsSuccessAction |
  LoadShipsFailureAction
