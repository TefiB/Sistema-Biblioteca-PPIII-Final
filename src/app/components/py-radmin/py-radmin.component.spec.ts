import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyRadminComponent } from './py-radmin.component';

describe('PyRadminComponent', () => {
  let component: PyRadminComponent;
  let fixture: ComponentFixture<PyRadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyRadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyRadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
