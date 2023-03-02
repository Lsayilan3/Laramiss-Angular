/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrcikolataComponent } from './orcikolata.component';

describe('OrcikolataComponent', () => {
  let component: OrcikolataComponent;
  let fixture: ComponentFixture<OrcikolataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcikolataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcikolataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
