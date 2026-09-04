import { ConnectedOwner } from './owners.interface';
import { createReducer, on } from '@ngrx/store';
import {
  fetchOwnersActions,
  fetchOwnersFailed,
  fetchOwnersSuccess
} from './owners.actions';

export const initialOwnerState: Readonly<ConnectedOwner> = {
  username: [],
  isLoading: false,
  inclVat: false,
  error: null
};

export const connectedUserNameFeatureKey = 'connectedUserName';

export const connectedOwnerReducer = createReducer<ConnectedOwner>(
  initialOwnerState,

  on(fetchOwnersActions, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(fetchOwnersSuccess, (state, { connectedUserName }) => ({
    ...state,
    username: connectedUserName, // ✅ THIS is the fix
    isLoading: false,
    error: null,
  })),

  on(fetchOwnersFailed, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export const reducers = {
  connectedUserName: connectedOwnerReducer
};
