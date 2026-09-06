import {Activity} from '../../../models/Activity';

export interface ActivityState {
  activities: Activity[];
  isLoading: boolean;
  inclVat: boolean;
  deleted: boolean;
  error: string|null;
}
