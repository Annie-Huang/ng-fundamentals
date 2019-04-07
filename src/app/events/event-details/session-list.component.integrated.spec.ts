import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SessionListComponent} from './session-list.component';
import {DebugElement} from '@angular/core';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';


describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {};
    const mockVocterService = {};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService},
        { provide: VoterService, useValue: mockVocterService},
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

});
