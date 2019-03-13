import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogopremiPage } from './catalogopremi.page';

describe('CatalogopremiPage', () => {
  let component: CatalogopremiPage;
  let fixture: ComponentFixture<CatalogopremiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogopremiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogopremiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
