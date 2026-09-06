import { createReducer, on } from '@ngrx/store';
import {
  fetchBookingBySelectedPropertyAction, fetchBookingBySelectedPropertyFailed, fetchBookingBySelectedPropertySuccess,
  fetchBookingsActions,
  fetchBookingsFailed,
  fetchBookingsSuccess, setSelectedPropertyName,
} from './bookings.actions';
import { BookingsState } from './bookings.interface';

export const initialBookingsState: Readonly<BookingsState> = {
  bookings: null,
  selectedPropertyName: null,
  isLoading: false,
  inclVat: false,
  error: null,
};

export const bookingsFeatureKey = 'bookingsFeatureKey';

export const bookingsReducer = createReducer<BookingsState>(
  initialBookingsState,
  //GetALLBOOKING
  on(fetchBookingsActions, (state) => ({
    ...state,
    isLoading: true,
    error: null, // Réinitialise l'erreur lors d'une nouvelle tentative
  })),
  on(fetchBookingsSuccess, (state, { bookings }) => ({
    ...state,
    bookings: bookings, // Adapte selon si vous stockez l'objet PageResponseDto complet ou la liste d'éléments (.content)
    isLoading: false, // 2. Passage de isLoading à false une fois les données reçues
    error: null,
  })),
  on(fetchBookingsFailed, (state) => ({ // 3. Récupération de l'erreur si transmise par l'action
    ...state,
    isLoading: false,
    error: 'Une erreur est survenue',
  })),
  //GetBookingsBySelectedProperty
  on(fetchBookingBySelectedPropertyAction,(state)=>({
    ...state,
    isLoading: true,
    error: null,
  })),
    on(fetchBookingBySelectedPropertySuccess,(state,{bookings})=>({
      ...state,
      bookings:bookings,
      isLoading: false,
      error: null,
    })),
    on(fetchBookingBySelectedPropertyFailed,(state=>({
      ...state,
      isLoading: false,
      error: 'Une erreur est survenue',
    }))),
  on(setSelectedPropertyName, (state, { propertyName }) => ({
    ...state,
    selectedPropertyName: propertyName,
  }))
);
