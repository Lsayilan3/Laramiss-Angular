/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MüzikComponent } from './müzik.component';

describe('MüzikComponent', () => {
  let component: MüzikComponent;
  let fixture: ComponentFixture<MüzikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MüzikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MüzikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
