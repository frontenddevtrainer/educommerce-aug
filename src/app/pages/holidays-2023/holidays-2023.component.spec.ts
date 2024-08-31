import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Holidays2023Component } from './holidays-2023.component';

describe('Holidays2023Component', () => {
  let component: Holidays2023Component;
  let fixture: ComponentFixture<Holidays2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Holidays2023Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Holidays2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
