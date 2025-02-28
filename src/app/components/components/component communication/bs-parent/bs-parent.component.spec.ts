import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsParentComponent } from './bs-parent.component';

describe('BsParentComponent', () => {
  let component: BsParentComponent;
  let fixture: ComponentFixture<BsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
