/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HediyelikComponent } from './hediyelik.component';

describe('HediyelikComponent', () => {
  let component: HediyelikComponent;
  let fixture: ComponentFixture<HediyelikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HediyelikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HediyelikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
