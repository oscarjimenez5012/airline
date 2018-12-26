import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerResumeComponent } from './passenger-resume.component';

describe('PassengerResumeComponent', () => {
  let component: PassengerResumeComponent;
  let fixture: ComponentFixture<PassengerResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
