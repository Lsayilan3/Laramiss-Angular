/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrAnimasyonComponent } from './OrAnimasyon.component';

describe('OrAnimasyonComponent', () => {
  let component: OrAnimasyonComponent;
  let fixture: ComponentFixture<OrAnimasyonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrAnimasyonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrAnimasyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
