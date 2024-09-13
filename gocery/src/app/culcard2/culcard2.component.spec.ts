import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culcard2Component } from './culcard2.component';

describe('Culcard2Component', () => {
  let component: Culcard2Component;
  let fixture: ComponentFixture<Culcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culcard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
