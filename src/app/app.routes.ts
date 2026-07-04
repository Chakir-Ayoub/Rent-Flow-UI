import { Routes } from '@angular/router';
import {
  BookingListComponentComponent
} from './features/booking/booking-list-component/booking-list-component.component';
import {BookingDetailComponent} from './features/booking/booking-detail/booking-detail.component';

export const routes: Routes = [
  {path:'',children:[
      {path:'',component:BookingListComponentComponent},
      {path:'details',component:BookingDetailComponent}
    ]}
];
