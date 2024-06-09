import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBonDeLivraisonComponent } from './details-bon-de-livraison.component';

describe('DetailsBonDeLivraisonComponent', () => {
  let component: DetailsBonDeLivraisonComponent;
  let fixture: ComponentFixture<DetailsBonDeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBonDeLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBonDeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
