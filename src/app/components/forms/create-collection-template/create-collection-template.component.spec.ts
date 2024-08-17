import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollectionTemplateComponent } from './create-collection-template.component';

describe('CreateCollectionTemplateComponent', () => {
  let component: CreateCollectionTemplateComponent;
  let fixture: ComponentFixture<CreateCollectionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCollectionTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCollectionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
