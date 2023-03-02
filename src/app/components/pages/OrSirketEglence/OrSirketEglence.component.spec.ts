/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrSirketEglenceComponent } from './OrSirketEglence.component';

describe('OrSirketEglenceComponent', () => {
  let component: OrSirketEglenceComponent;
  let fixture: ComponentFixture<OrSirketEglenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrSirketEglenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrSirketEglenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
