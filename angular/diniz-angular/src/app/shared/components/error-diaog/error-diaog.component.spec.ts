import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDiaogComponent } from './error-diaog.component';

describe('ErrorDiaogComponent', () => {
  let component: ErrorDiaogComponent;
  let fixture: ComponentFixture<ErrorDiaogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDiaogComponent]
    });
    fixture = TestBed.createComponent(ErrorDiaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
