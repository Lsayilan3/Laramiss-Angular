/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrCateringComponent } from './OrCatering.component';

describe('OrCateringComponent', () => {
  let component: OrCateringComponent;
  let fixture: ComponentFixture<OrCateringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrCateringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
