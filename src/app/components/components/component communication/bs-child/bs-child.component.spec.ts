import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsChildComponent } from './bs-child.component';

describe('BsChildComponent', () => {
  let component: BsChildComponent;
  let fixture: ComponentFixture<BsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
