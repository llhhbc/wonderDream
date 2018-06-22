import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreammapComponent } from './dreammap.component';

describe('DreammapComponent', () => {
  let component: DreammapComponent;
  let fixture: ComponentFixture<DreammapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreammapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreammapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
