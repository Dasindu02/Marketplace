import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilledComponent } from './chilled.component';

describe('ChilledComponent', () => {
  let component: ChilledComponent;
  let fixture: ComponentFixture<ChilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChilledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
