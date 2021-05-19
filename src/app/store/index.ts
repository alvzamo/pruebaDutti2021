/* import { FeatureState } from "./ships.reducer";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createSelector } from "@ngrx/store";

export interface AppState {
  feature: FeatureState;
}
 
export const selectFeature = (state: AppState) => state.feature;
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
 */