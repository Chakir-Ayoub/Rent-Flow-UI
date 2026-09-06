import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BookingService} from '../../../core/services/booking/booking.service';
import {
  fetchBookingBySelectedPropertyAction, fetchBookingBySelectedPropertyFailed,
  fetchBookingBySelectedPropertySuccess,
  fetchBookingsActions,
  fetchBookingsSuccess
} from './bookings.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {fetchOwnersFailed} from '../owners/owners.actions';

@Injectable({providedIn: 'root'})
export class BookingEffects{
  private readonly actions=inject(Actions);
  private readonly bookingsApi=inject(BookingService);

  fetchBooking$ = createEffect(() =>
    this.actions.pipe(
      ofType(fetchBookingsActions),
      switchMap(({ size, page }) =>
        this.bookingsApi.getBookins(size, page).pipe(
          map((bookings) => fetchBookingsSuccess({ bookings })),
          catchError((error) => of(fetchOwnersFailed()))
        )
      )
    )
  );

  fetchBookingByRelatedName$ = createEffect(() =>
  this.actions.pipe(
    ofType(fetchBookingBySelectedPropertyAction),
    switchMap(({selectedProperty,page,size})  =>
      this.bookingsApi.getBookingByRelatedName(selectedProperty,size,page).pipe(
        map((bookings) => fetchBookingBySelectedPropertySuccess({ bookings })),
        catchError((error) => of(fetchBookingBySelectedPropertyFailed()))
      )
  )
  ));


}
