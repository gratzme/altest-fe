import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsComponent } from './urls.component';
import { HttpClientModule } from '@angular/common/http';

describe('UrlsComponent', () => {
  let component: UrlsComponent;
  let fixture: ComponentFixture<UrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlsComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
