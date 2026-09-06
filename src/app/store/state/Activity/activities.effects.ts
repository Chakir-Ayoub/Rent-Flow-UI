import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ActivityService} from '../../../core/services/activity/activity.service';
import {
  createActivity,
  createActivitySuccess, deleteActivity, deleteActivitySuccess,
  fetchActivities,
  fetchActivitiesFailed,
  fetchActivitiesSuccess
} from './activities.actions';
import {catchError, map, of, switchMap} from 'rxjs';
@Injectable({providedIn: 'root'})
export class ActivityEffects {
  private readonly actions=inject(Actions);
  private readonly activityApi=inject(ActivityService);

  fetchActivity=createEffect(()=>
    this.actions.pipe(
      ofType(fetchActivities),
      switchMap(({propertyCode})=>
      this.activityApi.getActivityByPropertyCode(propertyCode).pipe(
        map((activities)=>fetchActivitiesSuccess({activities})),
        catchError((error)=>of(fetchActivitiesFailed(error)))
      )
      )
    )
  );

  createActivity$=createEffect(()=>
  this.actions.pipe(
    ofType(createActivity),
    switchMap(({activity,propertyCode})=>
    this.activityApi.createActivity(propertyCode,activity).pipe(
      map(()=>createActivitySuccess()),
      catchError((error)=>of(fetchActivitiesFailed(error)))
    ))));

  deleteActivities$=createEffect(()=>
  this.actions.pipe(
    ofType(deleteActivity),
    switchMap(({activity,propertyCode,})=>
    this.activityApi.deleteActivity(propertyCode,activity).pipe(
      map(()=>deleteActivitySuccess()),
      catchError((error)=>of(fetchActivitiesFailed(error)))
    )
    )
  )
  )
}
