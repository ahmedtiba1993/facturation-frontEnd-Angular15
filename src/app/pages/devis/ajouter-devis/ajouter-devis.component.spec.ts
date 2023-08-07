import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDevisComponent } from './ajouter-devis.component';

describe('AjouterDevisComponent', () => {
  let component: AjouterDevisComponent;
  let fixture: ComponentFixture<AjouterDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
