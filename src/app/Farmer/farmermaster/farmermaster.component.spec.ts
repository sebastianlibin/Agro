import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmermasterComponent } from './farmermaster.component';

describe('FarmermasterComponent', () => {
  let component: FarmermasterComponent;
  let fixture: ComponentFixture<FarmermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmermasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
