/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazerkesimComponent } from './lazerkesim.component';

describe('LazerkesimComponent', () => {
  let component: LazerkesimComponent;
  let fixture: ComponentFixture<LazerkesimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazerkesimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazerkesimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
