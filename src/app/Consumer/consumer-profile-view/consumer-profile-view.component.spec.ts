import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerProfileViewComponent } from './consumer-profile-view.component';

describe('ConsumerProfileViewComponent', () => {
  let component: ConsumerProfileViewComponent;
  let fixture: ComponentFixture<ConsumerProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
