import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiziePage } from './notizie.page';

describe('NotiziePage', () => {
  let component: NotiziePage;
  let fixture: ComponentFixture<NotiziePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiziePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiziePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
