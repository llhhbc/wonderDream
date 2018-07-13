import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordlinkComponent } from './wordlink.component';

describe('WordlinkComponent', () => {
  let component: WordlinkComponent;
  let fixture: ComponentFixture<WordlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
