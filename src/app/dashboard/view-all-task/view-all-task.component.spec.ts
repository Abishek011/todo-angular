import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTaskComponent } from './view-all-task.component';

describe('ViewAllTaskComponent', () => {
  let component: ViewAllTaskComponent;
  let fixture: ComponentFixture<ViewAllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
