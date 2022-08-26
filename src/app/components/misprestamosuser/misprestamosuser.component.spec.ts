import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisprestamosuserComponent } from './misprestamosuser.component';

describe('MisprestamosuserComponent', () => {
  let component: MisprestamosuserComponent;
  let fixture: ComponentFixture<MisprestamosuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisprestamosuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisprestamosuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
