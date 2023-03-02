/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrPersonelTeminiComponent } from './OrPersonelTemini.component';

describe('OrPersonelTeminiComponent', () => {
  let component: OrPersonelTeminiComponent;
  let fixture: ComponentFixture<OrPersonelTeminiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrPersonelTeminiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrPersonelTeminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
