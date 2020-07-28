import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceGeneratorComponent } from './dice-generator.component';

describe('DiceGeneratorComponent', () => {
  let component: DiceGeneratorComponent;
  let fixture: ComponentFixture<DiceGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
