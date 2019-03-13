import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DariscattarePage } from './dariscattare.page';

describe('DariscattarePage', () => {
  let component: DariscattarePage;
  let fixture: ComponentFixture<DariscattarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DariscattarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DariscattarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
