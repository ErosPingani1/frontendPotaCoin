import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioesercentePage } from './dettaglioesercente.page';

describe('DettaglioesercentePage', () => {
  let component: DettaglioesercentePage;
  let fixture: ComponentFixture<DettaglioesercentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioesercentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioesercentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
