import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Holidays2021Component } from './holidays-2021.component';

describe('Holidays2021Component', () => {
  let component: Holidays2021Component;
  let fixture: ComponentFixture<Holidays2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Holidays2021Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Holidays2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
