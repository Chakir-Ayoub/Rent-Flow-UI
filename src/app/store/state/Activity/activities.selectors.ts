import {ActivityState} from './activity.interface';
import {ActivityFeatureKey} from './activities.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectActivitiesState = createFeatureSelector<ActivityState>(ActivityFeatureKey);

export const selectActivities = createSelector(
  selectActivitiesState,
  (state) => state.activities
)

export const selectDeletedActivities = createSelector(
  selectActivitiesState,
  (state) => state.deleted
)

