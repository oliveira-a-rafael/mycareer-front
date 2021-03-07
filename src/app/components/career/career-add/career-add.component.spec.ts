import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAddComponent } from './career-add.component';

describe('CareerAddComponent', () => {
  let component: CareerAddComponent;
  let fixture: ComponentFixture<CareerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
