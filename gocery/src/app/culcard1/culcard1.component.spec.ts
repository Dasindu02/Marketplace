import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culcard1Component } from './culcard1.component';

describe('Culcard1Component', () => {
  let component: Culcard1Component;
  let fixture: ComponentFixture<Culcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culcard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
