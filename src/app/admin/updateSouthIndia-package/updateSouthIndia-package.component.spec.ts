/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdateSouthIndiaPackageComponent } from './updateSouthIndia-package.component';

describe('UpdateSouthIndiaPackageComponent', () => {
  let component: UpdateSouthIndiaPackageComponent;
  let fixture: ComponentFixture<UpdateSouthIndiaPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSouthIndiaPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSouthIndiaPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
