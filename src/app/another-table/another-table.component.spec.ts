import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherTableComponent } from './another-table.component';

describe('AnotherTableComponent', () => {
  let component: AnotherTableComponent;
  let fixture: ComponentFixture<AnotherTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
