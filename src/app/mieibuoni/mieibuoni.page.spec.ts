import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MieibuoniPage } from './mieibuoni.page';

describe('MieibuoniPage', () => {
  let component: MieibuoniPage;
  let fixture: ComponentFixture<MieibuoniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MieibuoniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MieibuoniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
