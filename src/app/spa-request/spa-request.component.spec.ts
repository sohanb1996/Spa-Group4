import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaRequestComponent } from './spa-request.component';

describe('SpaRequestComponent', () => {
  let component: SpaRequestComponent;
  let fixture: ComponentFixture<SpaRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
