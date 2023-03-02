/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrTrioEkibiComponent } from './OrTrioEkibi.component';

describe('OrTrioEkibiComponent', () => {
  let component: OrTrioEkibiComponent;
  let fixture: ComponentFixture<OrTrioEkibiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrTrioEkibiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrTrioEkibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
