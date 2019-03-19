import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciscontrinoPage } from './inserisciscontrino.page';

describe('InserisciscontrinoPage', () => {
  let component: InserisciscontrinoPage;
  let fixture: ComponentFixture<InserisciscontrinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciscontrinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciscontrinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
