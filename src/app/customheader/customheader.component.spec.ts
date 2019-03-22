import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomheaderPage } from './customheader.page';

describe('CustomheaderPage', () => {
  let component: CustomheaderPage;
  let fixture: ComponentFixture<CustomheaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomheaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomheaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
