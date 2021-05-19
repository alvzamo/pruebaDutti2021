import { Injectable } from '@angular/core';
    import { Actions, createEffect,Effect, ofType } from '@ngrx/effects';
    import { EMPTY,of } from 'rxjs';
    import { catchError, map, mergeMap } from 'rxjs/operators';
    import { LoadShipsAction, ShipsActionTypes, LoadShipsFailureAction, LoadShipsSuccessAction  } from './actions';
    import { ShipsAppService } from './../services/ships/shipsAppService.service'
    @Injectable()
    export class ShipsEffects {
      constructor(
        private actions$: Actions,
        private shipsAppService: ShipsAppService
      ) {}
      
   /*    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.LoadItems),
        mergeMap(({ payload: { page } }) =>
          this.shipsAppService.getShips(page).pipe(
            map(products => {
              return { type: ActionTypes.LoadSuccess, payload: products };
            }),
            catchError(() => EMPTY)
          )
        )
      )); */
      @Effect() loadShips$ = this.actions$
      .pipe(
        ofType<LoadShipsAction>(ShipsActionTypes.LOAD_SHIPS),
        mergeMap(
          () =>  this.shipsAppService.getShips()
            .pipe(
              map(data => {
                return new LoadShipsSuccessAction(data)
              }),
              catchError(error => of(new LoadShipsFailureAction(error)))
            )
        ),
    )
    }