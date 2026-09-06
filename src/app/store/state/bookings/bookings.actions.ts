import {createAction, props} from '@ngrx/store';
import {Booking} from '../../../models/Booking';
import {PageResponseDto} from '../../../models/pageResponseDto';
import {SearchCriteria} from '../../../models/SearchCriteria';

export const fetchBookingsActions=createAction('[Booking] Fetch Booking',props<{ page: number; size: number }>());
export const fetchBookingsSuccess=createAction('[Booking] Fetch Booking SUCCESS',props<{bookings:PageResponseDto<Booking>}>());
export const fetchBookingsFailed=createAction('[Booking] Fetch Booking FAILED');

export const fetchBookingBySelectedPropertyAction=createAction('[Booking] Fetch Booking By SelectedProperty',props<{ selectedProperty: SearchCriteria,page:number,size:number }>());
export const fetchBookingBySelectedPropertySuccess=createAction('[Booking] Fetch Booking By SelectedProperty SUCCESS',props<{bookings:PageResponseDto<Booking>}>());
export const fetchBookingBySelectedPropertyFailed=createAction('[Booking] Fetch Booking By SelectedProperty FAILED');


export const setSelectedPropertyName = createAction(
  '[Bookings] Set Selected Property Name',
  props<{ propertyName: any }>()
);

export const setSelectedPropertyCode=createAction(
    '[Bookings] Set Selected Property Code',
    props<{ propertyCode: any }>()
);
