import {PageResponseDto} from '../../../models/pageResponseDto';
import {Booking} from '../../../models/Booking';

export interface BookingsState {
  bookings:PageResponseDto<Booking> | null;
  selectedPropertyName: string | null;
  isLoading: boolean;
  inclVat:boolean;
  error:string|null
}
