import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionaryComponent } from './directionary.component';

describe('DirectionaryComponent', () => {
  let component: DirectionaryComponent;
  let fixture: ComponentFixture<DirectionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
