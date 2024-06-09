import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBonDeLivraisonComponent } from './modifier-bon-de-livraison.component';

describe('ModifierBonDeLivraisonComponent', () => {
  let component: ModifierBonDeLivraisonComponent;
  let fixture: ComponentFixture<ModifierBonDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierBonDeLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBonDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
