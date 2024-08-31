import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Holidays2022Component } from './holidays-2022.component';

describe('Holidays2022Component', () => {
  let component: Holidays2022Component;
  let fixture: ComponentFixture<Holidays2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Holidays2022Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Holidays2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
