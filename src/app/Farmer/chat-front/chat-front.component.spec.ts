import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFrontComponent } from './chat-front.component';

describe('ChatFrontComponent', () => {
  let component: ChatFrontComponent;
  let fixture: ComponentFixture<ChatFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
