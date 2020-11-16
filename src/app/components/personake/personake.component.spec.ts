import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonakeComponent } from './personake.component';

describe('PersonakeComponent', () => {
  let component: PersonakeComponent;
  let fixture: ComponentFixture<PersonakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
