/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrSokakLezzetiComponent } from './OrSokakLezzeti.component';

describe('OrSokakLezzetiComponent', () => {
  let component: OrSokakLezzetiComponent;
  let fixture: ComponentFixture<OrSokakLezzetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrSokakLezzetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrSokakLezzetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
