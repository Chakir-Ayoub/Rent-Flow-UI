import {Component, inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-detail',
  imports: [
  ],
  templateUrl: './booking-detail.component.html',
  styleUrl: './booking-detail.component.css'
})
export class BookingDetailComponent {

  data = inject(MAT_DIALOG_DATA);

  constructor() {
    console.log('DIALOG DATA:', this.data);
  }
}
