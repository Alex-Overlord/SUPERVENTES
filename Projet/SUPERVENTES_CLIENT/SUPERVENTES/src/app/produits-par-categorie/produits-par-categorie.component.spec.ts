import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsParCategorieComponent } from './produits-par-categorie.component';

describe('ProduitsParCategorieComponent', () => {
  let component: ProduitsParCategorieComponent;
  let fixture: ComponentFixture<ProduitsParCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsParCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
