import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteDialogComponent } from './boite-dialog.component';

describe('BoiteDialogComponent', () => {
  let component: BoiteDialogComponent;
  let fixture: ComponentFixture<BoiteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoiteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
