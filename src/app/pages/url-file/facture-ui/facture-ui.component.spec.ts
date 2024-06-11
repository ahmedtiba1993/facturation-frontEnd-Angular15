import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureUiComponent } from './facture-ui.component';

describe('FactureUiComponent', () => {
  let component: FactureUiComponent;
  let fixture: ComponentFixture<FactureUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
