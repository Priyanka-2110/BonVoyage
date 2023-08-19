/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SouthindiaComponent } from './southindia.component';

describe('SouthindiaComponent', () => {
  let component: SouthindiaComponent;
  let fixture: ComponentFixture<SouthindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
