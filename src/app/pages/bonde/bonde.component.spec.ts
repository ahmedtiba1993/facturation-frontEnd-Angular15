import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondeComponent } from './bonde.component';

describe('BondeComponent', () => {
  let component: BondeComponent;
  let fixture: ComponentFixture<BondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
