import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersComponentComponent } from './volunteers.component';

describe('VolunteersComponentComponent', () => {
  let component: VolunteersComponentComponent;
  let fixture: ComponentFixture<VolunteersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
