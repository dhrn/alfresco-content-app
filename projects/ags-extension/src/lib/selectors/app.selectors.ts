import { createSelector } from '@ngrx/store';

export const selectApp = (state: any) => state.app;

export const appSelection = createSelector(
  selectApp,
  state => state.selection
);


