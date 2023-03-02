/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrKokteylComponent } from './OrKokteyl.component';

describe('OrKokteylComponent', () => {
  let component: OrKokteylComponent;
  let fixture: ComponentFixture<OrKokteylComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrKokteylComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrKokteylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
