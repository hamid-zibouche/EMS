import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorKeycloakComponent } from './error-keycloak.component';

describe('ErrorKeycloakComponent', () => {
  let component: ErrorKeycloakComponent;
  let fixture: ComponentFixture<ErrorKeycloakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorKeycloakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorKeycloakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
