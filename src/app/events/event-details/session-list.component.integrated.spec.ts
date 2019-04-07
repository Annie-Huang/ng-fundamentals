import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SessionListComponent} from './session-list.component';
import {DebugElement} from '@angular/core';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {DurationPipe, ISession} from '../shared';
import {UpvoteComponent} from './upvote.component';
import {CollapsibleWellComponent} from '../../common';


describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    const mockVocterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
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

  it('should have the correct session title', () => {
    component.sessions = [
      {id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob']}
    ] as ISession[];

    component.filterBy = 'all';
    component.sortBy = 'name';
    component.eventId = 4;

    component.ngOnChanges();
    fixture.detectChanges();

    expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
  });
});
