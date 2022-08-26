import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionuserComponent } from './navegacionuser.component';

describe('NavegacionuserComponent', () => {
  let component: NavegacionuserComponent;
  let fixture: ComponentFixture<NavegacionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
