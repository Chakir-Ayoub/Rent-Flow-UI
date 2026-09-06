import {inject, Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Activity} from '../../../models/Activity';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly http=inject(HttpClient);

  getActivityByPropertyCode(propertyCode:string):Observable<Activity[]> {
    return this.http.get<Activity[]>(`${environment.api}/activity/${propertyCode}`);
  }

  createActivity(propertyCode:string,activity:Activity):Observable<void> {
   return  this.http.post<void>(`${environment.api}/activity/${propertyCode}`, activity);
  }

    deleteActivity(propertyCode:string,activity:Activity):Observable<void> {
      return this.http.delete<void>(`${environment.api}/activity/${propertyCode}`, { body: activity });
    }
}
