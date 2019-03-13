import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitamicoPage } from './invitamico.page';

describe('InvitamicoPage', () => {
  let component: InvitamicoPage;
  let fixture: ComponentFixture<InvitamicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitamicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitamicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
