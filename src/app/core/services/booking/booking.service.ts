import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {Booking} from '../../../models/Booking';
import {PageResponseDto} from '../../../models/pageResponseDto';
import {SearchCriteria} from '../../../models/SearchCriteria';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
private  http=inject(HttpClient);

 getBookins(size:Number,page:Number):Observable<PageResponseDto<Booking>>{
   return this.http.get<PageResponseDto<Booking>>(environment.api+`/smoobu?size=${size}&page=${page}`);
 }

  getBookingByRelatedName(searchCriteria:SearchCriteria, size:Number,page:Number):Observable<PageResponseDto<Booking>>{
   return this.http.post<PageResponseDto<Booking>>(environment.api+`/booking/relatedname?size=${size}&page=${page}`,searchCriteria);
  }


}
