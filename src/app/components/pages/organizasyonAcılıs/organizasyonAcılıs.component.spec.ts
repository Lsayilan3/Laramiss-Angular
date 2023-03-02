/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrganizasyonAcılısComponent } from './organizasyonAcılıs.component';

describe('OrganizasyonAcılısComponent', () => {
  let component: OrganizasyonAcılısComponent;
  let fixture: ComponentFixture<OrganizasyonAcılısComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizasyonAcılısComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizasyonAcılısComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
