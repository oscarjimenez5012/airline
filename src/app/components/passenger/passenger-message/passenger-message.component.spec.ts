import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerMessageComponent } from './passenger-message.component';

describe('PassengerMessageComponent', () => {
  let component: PassengerMessageComponent;
  let fixture: ComponentFixture<PassengerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
