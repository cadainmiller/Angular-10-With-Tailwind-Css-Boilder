import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleModernModalsComponent } from './simple-modern-modals.component';

describe('SimpleModernModalsComponent', () => {
  let component: SimpleModernModalsComponent;
  let fixture: ComponentFixture<SimpleModernModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleModernModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModernModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
