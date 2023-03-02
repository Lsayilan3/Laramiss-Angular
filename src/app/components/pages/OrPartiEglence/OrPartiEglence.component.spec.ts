/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrPartiEglenceComponent } from './OrPartiEglence.component';

describe('OrPartiEglenceComponent', () => {
  let component: OrPartiEglenceComponent;
  let fixture: ComponentFixture<OrPartiEglenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrPartiEglenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrPartiEglenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
