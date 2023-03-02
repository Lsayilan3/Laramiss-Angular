/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YiyecekicecekComponent } from './yiyecekicecek.component';

describe('YiyecekicecekComponent', () => {
  let component: YiyecekicecekComponent;
  let fixture: ComponentFixture<YiyecekicecekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiyecekicecekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiyecekicecekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
