import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSourcesComponent } from './lista-sources.component';

describe('ListaSourcesComponent', () => {
  let component: ListaSourcesComponent;
  let fixture: ComponentFixture<ListaSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
