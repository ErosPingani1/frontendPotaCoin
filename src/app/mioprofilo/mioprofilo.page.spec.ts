import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MioprofiloPage } from './mioprofilo.page';

describe('MioprofiloPage', () => {
  let component: MioprofiloPage;
  let fixture: ComponentFixture<MioprofiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MioprofiloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MioprofiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
