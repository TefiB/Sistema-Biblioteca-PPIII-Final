import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerejemplarComponent } from './verejemplar.component';

describe('VerejemplarComponent', () => {
  let component: VerejemplarComponent;
  let fixture: ComponentFixture<VerejemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerejemplarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerejemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
