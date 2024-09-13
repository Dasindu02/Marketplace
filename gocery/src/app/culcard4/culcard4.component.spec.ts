import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culcard4Component } from './culcard4.component';

describe('Culcard4Component', () => {
  let component: Culcard4Component;
  let fixture: ComponentFixture<Culcard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culcard4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culcard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
