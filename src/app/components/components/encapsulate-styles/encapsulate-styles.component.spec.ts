import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulateStylesComponent } from './encapsulate-styles.component';

describe('EncapsulateStylesComponent', () => {
  let component: EncapsulateStylesComponent;
  let fixture: ComponentFixture<EncapsulateStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulateStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulateStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
