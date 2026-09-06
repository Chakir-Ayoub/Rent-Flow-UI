import {Component, inject, input, OnInit, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import {MatFormField, MatInput} from '@angular/material/input';
import {Store} from '@ngrx/store';
import {fetchOwnersActions} from '../../store/state/owners/owners.actions';
import {selectConnectedOwner} from '../../store/state/owners/owners.selectors';
import {Properties} from '../../models/Properties';
import {
  fetchBookingBySelectedPropertyAction, setSelectedPropertyCode,
  setSelectedPropertyName
} from '../../store/state/bookings/bookings.actions';
import {selectBookingsByRelatedName} from '../../store/state/bookings/bookings.selectors';
import {SearchCriteria} from '../../models/SearchCriteria';
@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule, FormsModule, MatAutocomplete, MatOption, MatInput, MatAutocompleteTrigger, MatFormField],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  private readonly store = inject(Store);
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  property:Properties[];
  connectedUserName$ = this.store.select(selectConnectedOwner);
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: '/activity',
      icon: 'fal fa-star',
      label: 'Activity',
    },
    {
      routeLink: '/booking',
      icon: 'fal fa-bed',
      label: 'Bookings',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];
  bookingsBySelectedProperty$=this.store.select(selectBookingsByRelatedName);

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
  ngOnInit(): void {
    this.store.dispatch(fetchOwnersActions());
    this.getProperty();
    throw new Error('Method not implemented.');
  }

  getProperty(){
    this.connectedUserName$.subscribe(property => {
      this.property = property;
    });
  }

  getBookingsBySelectedroperty(name:string){
    const searchCriteria: SearchCriteria={
      relatedName:name,
    }
    this.store.dispatch(fetchBookingBySelectedPropertyAction({selectedProperty:searchCriteria,page:0,size:20}));
    this.bookingsBySelectedProperty$.subscribe();
  }
  onPropertySelected(name: string,propertycode:string): void {
    this.store.dispatch(setSelectedPropertyName({propertyName:name}));
    this.store.dispatch(setSelectedPropertyCode({propertyCode:propertycode}));
    this.getBookingsBySelectedroperty(propertycode);
  }
}
