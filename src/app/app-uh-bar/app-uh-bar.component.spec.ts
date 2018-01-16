import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUhBarComponent } from './app-uh-bar.component';

describe('AppUhBarComponent', () => {
  let component: AppUhBarComponent;
  let fixture: ComponentFixture<AppUhBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUhBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUhBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
