import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechDetailComponent } from './mech-detail.component';

describe('MechDetailComponent', () => {
  let component: MechDetailComponent;
  let fixture: ComponentFixture<MechDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
