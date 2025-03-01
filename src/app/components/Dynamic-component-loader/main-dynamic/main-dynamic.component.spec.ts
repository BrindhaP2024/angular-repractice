import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDynamicComponent } from './main-dynamic.component';

describe('MainDynamicComponent', () => {
  let component: MainDynamicComponent;
  let fixture: ComponentFixture<MainDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
