import {createAction, props} from '@ngrx/store';
import {Properties} from '../../../models/Properties';

export const fetchOwnersActions=createAction('[Owners] Fetch Connected Owner');
export const fetchOwnersSuccess=createAction('[Owners] Fetch Connected Owner Success',props<{connectedUserName:Properties[]}>());
export const fetchOwnersFailed=createAction('[Owners] Fetch Connected Owner FAILED');

