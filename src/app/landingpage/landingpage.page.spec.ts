import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagePage } from './landingpage.page';

describe('LandingpagePage', () => {
  let component: LandingpagePage;
  let fixture: ComponentFixture<LandingpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
