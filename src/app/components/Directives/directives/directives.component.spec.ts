import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIrectivesComponent } from './directives.component';

describe('DIrectivesComponent', () => {
  let component: DIrectivesComponent;
  let fixture: ComponentFixture<DIrectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DIrectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIrectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
