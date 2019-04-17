import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliobuonoPage } from './dettagliobuono.page';

describe('DettagliobuonoPage', () => {
  let component: DettagliobuonoPage;
  let fixture: ComponentFixture<DettagliobuonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliobuonoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliobuonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
