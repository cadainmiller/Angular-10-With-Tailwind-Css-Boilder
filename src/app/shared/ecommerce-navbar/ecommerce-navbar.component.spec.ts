import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceNavbarComponent } from './ecommerce-navbar.component';

describe('EcommerceNavbarComponent', () => {
  let component: EcommerceNavbarComponent;
  let fixture: ComponentFixture<EcommerceNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
