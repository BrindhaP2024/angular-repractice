import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRxjsCreationComponent } from './app-rxjs-creation.component';

describe('AppRxjsCreationComponent', () => {
  let component: AppRxjsCreationComponent;
  let fixture: ComponentFixture<AppRxjsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRxjsCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRxjsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
