import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBarGraphComponent } from './double-bar-graph.component';

describe('DoubleBarGraphComponent', () => {
  let component: DoubleBarGraphComponent;
  let fixture: ComponentFixture<DoubleBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleBarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
