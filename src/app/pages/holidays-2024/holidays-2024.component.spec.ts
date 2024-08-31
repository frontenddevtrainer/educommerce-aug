import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Holidays2024Component } from './holidays-2024.component';

describe('Holidays2024Component', () => {
  let component: Holidays2024Component;
  let fixture: ComponentFixture<Holidays2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Holidays2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Holidays2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
