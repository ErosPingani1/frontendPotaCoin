import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneesercentePage } from './registrazioneesercente.page';

describe('RegistrazioneesercentePage', () => {
  let component: RegistrazioneesercentePage;
  let fixture: ComponentFixture<RegistrazioneesercentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrazioneesercentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrazioneesercentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
