import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Properties} from '../../../models/Properties';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private  http_:HttpClient) { }

  getConnectedOwner(): Observable<Properties[]> {
    return this.http_.get<Properties[]>(
      `${environment.api}/owners/connecteduser`,
    );
  }

}
