import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePointsComponent } from './dialog-update-points.component';

describe('DialogUpdatePointsComponent', () => {
  let component: DialogUpdatePointsComponent;
  let fixture: ComponentFixture<DialogUpdatePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdatePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdatePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
