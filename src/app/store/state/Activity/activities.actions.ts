import {createAction, props} from '@ngrx/store';
import {Activity} from '../../../models/Activity';

export const fetchActivities = createAction('[Activity] Fetching activities...',props<{propertyCode:string}>());
export const fetchActivitiesSuccess=createAction('[Activity] Fetching activities SUCCESS',props<{activities:Activity[]}>());
export const fetchActivitiesFailed=createAction('[Activity] Fetching activities FAILED',props<{error:string}>());

export const createActivity=createAction('[Activity] Starting the creation activity',props<{activity:Activity,propertyCode:string}>());
export const createActivitySuccess=createAction('[Activity] Create activity successfully.');
export const createActivityFailed=createAction('[Activity] Create activity failed',props<{error:string}>());

export const deleteActivity=createAction('[Activity] Starting deletion activity',props<{activity:Activity,propertyCode:string}>());
export const deleteActivitySuccess=createAction('[Activity] Delete activity successfully.');
export const deleteActivityFailed=createAction('[Activity] Delete activity failed.',props<{error:string}>());
