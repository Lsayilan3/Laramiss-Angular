/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartistoreComponent } from './partistore.component';

describe('PartistoreComponent', () => {
  let component: PartistoreComponent;
  let fixture: ComponentFixture<PartistoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartistoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartistoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
