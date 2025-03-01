import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMetaComponent } from './host-meta.component';

describe('HostMetaComponent', () => {
  let component: HostMetaComponent;
  let fixture: ComponentFixture<HostMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostMetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
