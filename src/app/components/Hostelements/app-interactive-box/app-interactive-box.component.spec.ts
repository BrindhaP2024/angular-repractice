import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInteractiveBoxComponent } from './app-interactive-box.component';

describe('AppInteractiveBoxComponent', () => {
  let component: AppInteractiveBoxComponent;
  let fixture: ComponentFixture<AppInteractiveBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInteractiveBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInteractiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
