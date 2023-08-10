import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapDevisComponent } from './recap-devis.component';

describe('RecapDevisComponent', () => {
  let component: RecapDevisComponent;
  let fixture: ComponentFixture<RecapDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
