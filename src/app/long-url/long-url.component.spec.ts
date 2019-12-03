import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LongUrlComponent } from './long-url.component';
// import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LongUrlComponent', () => {
  let component: LongUrlComponent;
  let fixture: ComponentFixture<LongUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongUrlComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
