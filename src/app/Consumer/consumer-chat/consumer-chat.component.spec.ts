import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerChatComponent } from './consumer-chat.component';

describe('ConsumerChatComponent', () => {
  let component: ConsumerChatComponent;
  let fixture: ComponentFixture<ConsumerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
