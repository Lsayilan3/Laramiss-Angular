/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrganizasyonPartiStoreComponent } from './organizasyonPartiStore.component';

describe('OrganizasyonPartiStoreComponent', () => {
  let component: OrganizasyonPartiStoreComponent;
  let fixture: ComponentFixture<OrganizasyonPartiStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizasyonPartiStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizasyonPartiStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
