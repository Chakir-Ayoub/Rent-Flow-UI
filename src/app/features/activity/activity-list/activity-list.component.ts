import {Component, inject, OnInit} from '@angular/core';
import {ActivityFormComponent} from '../activity-form/activity-form.component';
import {selectActivities, selectDeletedActivities} from '../../../store/state/Activity/activities.selectors';
import {Store} from '@ngrx/store';
import {selectSelectedPropertyCode, selectSelectedPropertyName} from '../../../store/state/bookings/bookings.selectors';
import {deleteActivity, fetchActivities} from '../../../store/state/Activity/activities.actions';
import {Activity} from '../../../models/Activity';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-activity-list',
  imports: [
    ActivityFormComponent,
    NgForOf
  ],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent implements OnInit {
  private readonly store=inject(Store);
  activities$ = this.store.select(selectActivities);
  selectedPropertyCode$=this.store.selectSignal(selectSelectedPropertyCode);
  selectedProperty$=this.store.select(selectSelectedPropertyName);
  deleteActivity$ = this.store.select(selectDeletedActivities);
  /********VARIABLES**************/
  activities:Activity[] = [];
  propertyName:string="";
  ngOnInit(): void {
    this.getActivities();
    this.selectedPropertyName();
  }
  async getActivities(){
      this.store.dispatch(fetchActivities({propertyCode:this.selectedPropertyCode$()!}));
      this.activities$.subscribe(activities => {
        this.activities = activities;
      })

  }

  async selectedPropertyName(){
    this.selectedProperty$.subscribe(propertyName => {this.propertyName = propertyName;})
  }

  async deleteActivity(activity:Activity){
    this.store.dispatch(deleteActivity({activity: activity,propertyCode: this.selectedPropertyCode$()!}));
  }
}
