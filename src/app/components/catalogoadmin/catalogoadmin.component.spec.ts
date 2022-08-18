import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoadminComponent } from './catalogoadmin.component';

describe('CatalogoadminComponent', () => {
  let component: CatalogoadminComponent;
  let fixture: ComponentFixture<CatalogoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
