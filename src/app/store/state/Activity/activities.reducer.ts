import {ActivityState} from './activity.interface';
import {
  deleteActivity,
  deleteActivityFailed, deleteActivitySuccess,
  fetchActivities,
  fetchActivitiesFailed,
  fetchActivitiesSuccess
} from './activities.actions';
import {setSelectedPropertyCode} from '../bookings/bookings.actions';
import {createReducer, on} from '@ngrx/store';
import {connectedOwnerReducer} from '../owners';

export const initialActivityState:Readonly<ActivityState> = {
  activities:null,
  isLoading:false,
  inclVat:false,
  deleted:false,
  error:null,
}
export const ActivityFeatureKey="ActivityFeatureKey";

export const ActivityReducer=createReducer<ActivityState>(
  initialActivityState,
  on(fetchActivities,(state)=>({
    ...state,
    isLoading:true,
    error:null,
  })),
  on(fetchActivitiesSuccess,(state,{activities})=>({
    ...state,
    activities:activities,
    isLoading:false,
    error:null
  })),
  on(fetchActivitiesFailed,(state)=>({
    ...state,
    isLoading:true,
    error:state.error,
  })),
  on(setSelectedPropertyCode, (state,{propertyCode})=>({
    ...state,
    selectedPropertyCode:propertyCode,
  })),
  on(deleteActivity,(state)=>({
    ...state,
    isLoading:true,
    error:null,
    deleted:false,
  })),
  on(deleteActivitySuccess,(state)=>({
    ...state,
    isLoading:true,
    deleted:true,
    error:state.error,
  })),
  on(deleteActivityFailed,(state)=>({
    ...state,
    isLoading:true,
    error:state.error,
    deleted:false,
  }))
)
export const activityReducers = {
  activities: ActivityReducer
};
