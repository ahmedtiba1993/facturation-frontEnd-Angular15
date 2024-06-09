import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFileComponent } from './url-file.component';

describe('UrlFileComponent', () => {
  let component: UrlFileComponent;
  let fixture: ComponentFixture<UrlFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
