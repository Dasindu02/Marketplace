import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culcard3Component } from './culcard3.component';

describe('Culcard3Component', () => {
  let component: Culcard3Component;
  let fixture: ComponentFixture<Culcard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culcard3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culcard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
