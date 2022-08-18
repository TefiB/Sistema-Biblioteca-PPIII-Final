import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogolibroComponent } from './catalogolibro.component';

describe('CatalogolibroComponent', () => {
  let component: CatalogolibroComponent;
  let fixture: ComponentFixture<CatalogolibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogolibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
