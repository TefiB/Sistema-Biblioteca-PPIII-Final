import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogonotebookuserComponent } from './catalogonotebookuser.component';

describe('CatalogonotebookuserComponent', () => {
  let component: CatalogonotebookuserComponent;
  let fixture: ComponentFixture<CatalogonotebookuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogonotebookuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogonotebookuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
