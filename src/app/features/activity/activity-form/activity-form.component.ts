import {Component, inject} from '@angular/core';
import {selectSelectedPropertyCode, selectSelectedPropertyName} from '../../../store/state/bookings/bookings.selectors';
import {Store} from '@ngrx/store';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {createActivity, fetchActivities} from '../../../store/state/Activity/activities.actions';
import {Activity} from '../../../models/Activity';

@Component({
  selector: 'app-activity-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './activity-form.component.html',
  styleUrl: './activity-form.component.css'
})
export class ActivityFormComponent {
  private readonly store=inject(Store);
  selectedProperty$=this.store.selectSignal(selectSelectedPropertyName);
  selectedPropertyCode$=this.store.selectSignal(selectSelectedPropertyCode);

  activityForm=new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
  })

  get title():AbstractControl {
    return this.activityForm.controls.title;
  }
  get description():AbstractControl {
    return this.activityForm.controls.description;
  }
  get price():AbstractControl {
    return this.activityForm.controls.price;
  }
  create(){
    if(this.activityForm.valid){
      this.store.dispatch(createActivity({activity:this.activityForm.value as Activity, propertyCode: this.selectedPropertyCode$()!}));
      this.activityForm.reset();
    }
  }
}
