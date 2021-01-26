import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarForDashboardsComponent } from './sidebar-for-dashboards.component';

describe('SidebarForDashboardsComponent', () => {
  let component: SidebarForDashboardsComponent;
  let fixture: ComponentFixture<SidebarForDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarForDashboardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarForDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
