import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionadminComponent } from './navegacionadmin.component';

describe('NavegacionadminComponent', () => {
  let component: NavegacionadminComponent;
  let fixture: ComponentFixture<NavegacionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
