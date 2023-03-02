/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrCoffeeBreakComponent } from './OrCoffeeBreak.component';

describe('OrCoffeeBreakComponent', () => {
  let component: OrCoffeeBreakComponent;
  let fixture: ComponentFixture<OrCoffeeBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrCoffeeBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrCoffeeBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
