import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizzatiPage } from './utilizzati.page';

describe('UtilizzatiPage', () => {
  let component: UtilizzatiPage;
  let fixture: ComponentFixture<UtilizzatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizzatiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizzatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
