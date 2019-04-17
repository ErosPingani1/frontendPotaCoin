import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscossionebuonoPage } from './riscossionebuono.page';

describe('RiscossionebuonoPage', () => {
  let component: RiscossionebuonoPage;
  let fixture: ComponentFixture<RiscossionebuonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscossionebuonoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscossionebuonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
