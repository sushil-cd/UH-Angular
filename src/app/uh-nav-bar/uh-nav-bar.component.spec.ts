import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UhNavBarComponent } from './uh-nav-bar.component';

describe('UhNavBarComponent', () => {
  let component: UhNavBarComponent;
  let fixture: ComponentFixture<UhNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UhNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UhNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
