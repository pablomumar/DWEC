import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotasComponent } from './app-notas.component';

describe('AppNotasComponent', () => {
  let component: AppNotasComponent;
  let fixture: ComponentFixture<AppNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
