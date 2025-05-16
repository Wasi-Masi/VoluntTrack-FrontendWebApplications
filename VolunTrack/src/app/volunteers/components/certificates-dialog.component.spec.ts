import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesDialogComponent } from './certificates-dialog.component';

describe('CertificatesDialogComponent', () => {
  let component: CertificatesDialogComponent;
  let fixture: ComponentFixture<CertificatesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
