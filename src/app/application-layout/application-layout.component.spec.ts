import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLayoutComponent } from './application-layout.component';

describe('ApplicationLayoutComponent', () => {
  let component: ApplicationLayoutComponent;
  let fixture: ComponentFixture<ApplicationLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplicationLayoutComponent]
    });
    fixture = TestBed.createComponent(ApplicationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});