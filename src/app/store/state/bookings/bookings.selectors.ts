import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingsState } from './bookings.interface';
import { bookingsFeatureKey } from './bookings.reducer';

// 1. Utilisation de createFeatureSelector avec la clé de feature
export const selectBookingsState = createFeatureSelector<BookingsState>(bookingsFeatureKey);

// 2. Sélecteur pour obtenir l'objet pagination / liste de réservations
export const selectBookings = createSelector(
  selectBookingsState,
  (state) => state.bookings
);

export const selectBookingsByRelatedName = createSelector(
  selectBookingsState,
  (state) => state.bookings
)

// 3. Sélecteur pour les erreurs
export const selectError = createSelector(
  selectBookingsState,
  (state) => state.error
);

// 4. Sélecteur pour le statut de chargement
export const selectIsLoading = createSelector(
  selectBookingsState,
  (state) => state.isLoading
);


export const selectSelectedPropertyName = createSelector(
  selectBookingsState,
  (state) => state?.selectedPropertyName ?? null
);

export const selectSelectedPropertyCode = createSelector(
  selectBookingsState,
  state => state.selectedPropertyCode
);
