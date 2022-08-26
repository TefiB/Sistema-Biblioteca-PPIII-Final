import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaluserComponent } from './principaluser.component';

describe('PrincipaluserComponent', () => {
  let component: PrincipaluserComponent;
  let fixture: ComponentFixture<PrincipaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
