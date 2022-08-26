import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogolibrouserComponent } from './catalogolibrouser.component';

describe('CatalogolibrouserComponent', () => {
  let component: CatalogolibrouserComponent;
  let fixture: ComponentFixture<CatalogolibrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogolibrouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogolibrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
