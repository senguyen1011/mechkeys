import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechSearchComponent } from './mech-search.component';

describe('MechSearchComponent', () => {
  let component: MechSearchComponent;
  let fixture: ComponentFixture<MechSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
