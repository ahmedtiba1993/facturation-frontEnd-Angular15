import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBonDeLivraisonComponent } from './ajouter-bon-de-livraison.component';

describe('AjouterBonDeLivraisonComponent', () => {
  let component: AjouterBonDeLivraisonComponent;
  let fixture: ComponentFixture<AjouterBonDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBonDeLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBonDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
