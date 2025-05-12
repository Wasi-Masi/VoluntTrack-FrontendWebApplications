import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredVolunteersComponent } from './registered-volunteers.component';

describe('RegisteredVolunteersComponent', () => {
  let component: RegisteredVolunteersComponent;
  let fixture: ComponentFixture<RegisteredVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredVolunteersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
