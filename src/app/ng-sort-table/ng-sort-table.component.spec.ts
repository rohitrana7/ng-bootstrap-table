import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSortTableComponent } from './ng-sort-table.component';

describe('NgSortTableComponent', () => {
  let component: NgSortTableComponent;
  let fixture: ComponentFixture<NgSortTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSortTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgSortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
