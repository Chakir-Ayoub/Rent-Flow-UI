import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmmobuSyncComponent } from './smmobu-sync.component';

describe('SmmobuSyncComponent', () => {
  let component: SmmobuSyncComponent;
  let fixture: ComponentFixture<SmmobuSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmmobuSyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmmobuSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
