import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifichePage } from './notifiche.page';

describe('NotifichePage', () => {
  let component: NotifichePage;
  let fixture: ComponentFixture<NotifichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifichePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
