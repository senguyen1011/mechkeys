import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechListComponent } from './mech-list.component';

describe('MechListComponent', () => {
  let component: MechListComponent;
  let fixture: ComponentFixture<MechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
