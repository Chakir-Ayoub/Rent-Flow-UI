import {Component, inject, OnInit} from '@angular/core';
import { TagModule } from 'primeng/tag';
import {TabsModule} from 'primeng/tabs';
import {Booking} from '../../../models/Booking';
import { NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchCriteria} from '../../../models/SearchCriteria';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BookingDetailComponent} from '../booking-detail/booking-detail.component';
import {Store} from '@ngrx/store';
import {firstValueFrom} from 'rxjs';
import {
  selectBookingsByRelatedName,
  selectSelectedPropertyName
} from '../../../store/state/bookings/bookings.selectors';
import {Properties} from '../../../models/Properties';
import {selectConnectedOwner} from '../../../store/state/owners/owners.selectors';
import {fetchBookingBySelectedPropertyAction} from '../../../store/state/bookings/bookings.actions';
import {fetchOwnersActions} from '../../../store/state/owners/owners.actions';
@Component({
  selector: 'app-booking-list-component',
  imports: [TagModule, TabsModule, NgForOf, FormsModule,MatDialogModule],
  templateUrl: './booking-list-component.component.html',
  styleUrl: './booking-list-component.component.css'
})
export class BookingListComponentComponent implements OnInit {
  private readonly store = inject(Store);
  ngOnInit(): void {
    this.getPropertyByConnectedUser();
    this.loadBookings(0);
  }
  bookings: Booking[] | undefined;
  currentPage = 0;
  filterApplied: boolean = false;
  pageSize = 10;
  totalPages = 0;
  totalElements = 0;
  pages: number[] = [];
  relatedName: string = '';
  readonly dialog=inject(MatDialog);
  bookingsBySelectedProperty$=this.store.select(selectBookingsByRelatedName);
  connectedUserProperties$=this.store.select(selectConnectedOwner);
  selectedProperty$=this.store.select(selectSelectedPropertyName);
  properties:Properties[];

  generatePages() {

    const maxVisible = 5;

    let start = Math.max(0, this.currentPage - 2);
    let end = Math.min(this.totalPages, start + maxVisible);

    if (end - start < maxVisible) {
      start = Math.max(0, end - maxVisible);
    }

    this.pages = [];

    for (let i = start; i < end; i++) {
      this.pages.push(i);
    }

  }
  async loadBookings(page: number = 0) {
    const propertyName = await firstValueFrom(this.selectedProperty$);
    const searchCreteria:SearchCriteria={
      relatedName:propertyName,
    }
      this.store.dispatch(fetchBookingBySelectedPropertyAction({selectedProperty:searchCreteria ,page:page,size:this.pageSize}));
      this.filterApplied = false;
      this.bookingsBySelectedProperty$.subscribe(item=>{
      this.bookings = item.content;
      this.currentPage = item.number;
      this.totalPages = item.totalPages;
      this.totalElements = item.totalElements;
      this.generatePages();
    })
  }
  goToPage(page: number) {
    if (page < 0 || page >= this.totalPages) {
      return;
    }
    this.filterApplied ? this.getBookingByRelatedName(this.relatedName,page):this.loadBookings(page);
  }
  getBookingByRelatedName(relatedname:string,page: number = 0) {
    if (relatedname==="") {
      this.loadBookings(0);
    }else {
      const searchCriteria: SearchCriteria={
        relatedName:relatedname,
      }
      this.store.dispatch(fetchBookingBySelectedPropertyAction({selectedProperty:searchCriteria,page:page,size:this.pageSize}));
      this.bookingsBySelectedProperty$.subscribe(response => {
        this.bookings = response.content;
        this.currentPage = response.number;
        this.totalPages = response.totalPages;
        this.totalElements = response.totalElements;
        this.filterApplied=true;
        this.generatePages();
      });
    }
  }
  openDialog(booking:any) {
    console.log(booking);
    const dialogRef = this.dialog.open(BookingDetailComponent, {
      width: '950px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog',
      data: booking
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }
  getPropertyByConnectedUser(){
    this.store.dispatch(fetchOwnersActions());
    this.connectedUserProperties$.subscribe(properties=>{
      this.properties = properties;
    })
  }

}
