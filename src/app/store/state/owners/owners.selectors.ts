import {connectedUserNameFeatureKey} from './owners.reducers';
import {ConnectedOwner} from './owners.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectConnectedOwnersState = createFeatureSelector<ConnectedOwner>(connectedUserNameFeatureKey);
export const selectConnectedOwner = createSelector(
  selectConnectedOwnersState,
  (state) => state.username
);
export const selectError=createSelector(selectConnectedOwnersState,(state)=>state.error);
export const selectIsLoading=createSelector(selectConnectedOwnersState,(state)=>state.isLoading);
