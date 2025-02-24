import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleObsSubjectComponent } from './sample-obs-subject.component';

describe('SampleObsSubjectComponent', () => {
  let component: SampleObsSubjectComponent;
  let fixture: ComponentFixture<SampleObsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleObsSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleObsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
