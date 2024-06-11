import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisUiComponent } from './devis-ui.component';

describe('DevisUiComponent', () => {
  let component: DevisUiComponent;
  let fixture: ComponentFixture<DevisUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
