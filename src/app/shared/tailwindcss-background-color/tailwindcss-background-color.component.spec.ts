import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindcssBackgroundColorComponent } from './tailwindcss-background-color.component';

describe('TailwindcssBackgroundColorComponent', () => {
  let component: TailwindcssBackgroundColorComponent;
  let fixture: ComponentFixture<TailwindcssBackgroundColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindcssBackgroundColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindcssBackgroundColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
