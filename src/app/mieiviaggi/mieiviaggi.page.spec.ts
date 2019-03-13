import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MieiviaggiPage } from './mieiviaggi.page';

describe('MieiviaggiPage', () => {
  let component: MieiviaggiPage;
  let fixture: ComponentFixture<MieiviaggiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieiviaggiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MieiviaggiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
