import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaautoresComponent } from './listaautores.component';

describe('ListaautoresComponent', () => {
  let component: ListaautoresComponent;
  let fixture: ComponentFixture<ListaautoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaautoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaautoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
