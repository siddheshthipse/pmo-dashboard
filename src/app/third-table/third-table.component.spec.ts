import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTableComponent } from './third-table.component';

describe('ThirdTableComponent', () => {
  let component: ThirdTableComponent;
  let fixture: ComponentFixture<ThirdTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
