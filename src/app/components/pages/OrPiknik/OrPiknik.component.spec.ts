/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrPiknikComponent } from './OrPiknik.component';

describe('OrPiknikComponent', () => {
  let component: OrPiknikComponent;
  let fixture: ComponentFixture<OrPiknikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrPiknikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrPiknikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
