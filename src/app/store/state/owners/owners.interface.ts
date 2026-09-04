import {Properties} from '../../../models/Properties';

export interface ConnectedOwner {
  username: Properties[];
  isLoading: boolean;
  inclVat:boolean;
  error:string|null
 }
