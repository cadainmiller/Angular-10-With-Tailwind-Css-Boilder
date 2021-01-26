import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithBackgroundImageComponent } from './header-with-background-image.component';

describe('HeaderWithBackgroundImageComponent', () => {
  let component: HeaderWithBackgroundImageComponent;
  let fixture: ComponentFixture<HeaderWithBackgroundImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithBackgroundImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
