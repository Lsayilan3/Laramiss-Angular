/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrEkipmanKiralamaComponent } from './OrEkipmanKiralama.component';

describe('OrEkipmanKiralamaComponent', () => {
  let component: OrEkipmanKiralamaComponent;
  let fixture: ComponentFixture<OrEkipmanKiralamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrEkipmanKiralamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrEkipmanKiralamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
