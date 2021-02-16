import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAddComponent } from './careers-add.component';

describe('CareersAddComponent', () => {
  let component: CareersAddComponent;
  let fixture: ComponentFixture<CareersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
