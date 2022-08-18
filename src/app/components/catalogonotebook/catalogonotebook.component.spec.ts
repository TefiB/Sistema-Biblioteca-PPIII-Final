import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogonotebookComponent } from './catalogonotebook.component';

describe('CatalogonotebookComponent', () => {
  let component: CatalogonotebookComponent;
  let fixture: ComponentFixture<CatalogonotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogonotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogonotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
