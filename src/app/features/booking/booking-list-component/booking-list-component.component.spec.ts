import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingListComponentComponent } from './booking-list-component.component';

describe('BookingListComponentComponent', () => {
  let component: BookingListComponentComponent;
  let fixture: ComponentFixture<BookingListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
