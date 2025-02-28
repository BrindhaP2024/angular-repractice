import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectorsComponent } from './app-selectors.component';

describe('AppSelectorsComponent', () => {
  let component: AppSelectorsComponent;
  let fixture: ComponentFixture<AppSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSelectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
