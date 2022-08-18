import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoiftsComponent } from './logoifts.component';

describe('LogoiftsComponent', () => {
  let component: LogoiftsComponent;
  let fixture: ComponentFixture<LogoiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
